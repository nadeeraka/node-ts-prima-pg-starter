// tsx seed.ts

import { faker } from '@faker-js/faker';
import { pgTable, text, varchar, timestamp } from 'drizzle-orm/pg-core';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { createInsertSchema } from 'drizzle-zod';
import { customAlphabet } from 'nanoid';
import postgres from 'postgres';
import { z } from 'zod';

import '#env.ts';
import {uuid} from "drizzle-orm/pg-core/index";

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
const length = 14;

const nanoid = customAlphabet(alphabet, length);

function generatePublicId() {
    return nanoid();
}

const queryClient = postgres(process.env.DATABASE_DIRECT_URL || '');

const db: PostgresJsDatabase = drizzle(queryClient, {
    logger: true,
});

const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email').notNull().unique(),
    type: varchar('type', { length: 56 }).notNull(),
    difficulty: varchar('difficulty', { length: 56 }).notNull(),
});

const insertUserSchema = createInsertSchema(users, {
    email: (schema) => schema.email.email('Email address is not valid'),
});

type UserToBeInserted = z.infer<typeof insertUserSchema>;

const generateUserRows = (count: number): UserToBeInserted[] => {
    const rows: UserToBeInserted[] = [];

    for (let i = 0; i < count; i++) {
        rows.push({
            id: generatePublicId(),
            email: faker.internet.email(),
            name: `${faker.person.firstName()} ${faker.person.lastName()}`,
            type:'beginner',
            difficulty:'easy'
        });
    }

    return rows;
};

async function seed() {
    console.log('Seeding...');
    console.time('DB has been seeded!');

    // database teardown
    await db.delete(users);

    // database setup
    const newUserRows = generateUserRows(100);
    await db.insert(users).values(newUserRows).returning();
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        console.log('Seeding done!');
        process.exit(0);
    });