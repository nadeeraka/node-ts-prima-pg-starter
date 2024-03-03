import { relations } from 'drizzle-orm';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import {integer, pgTable, text, timestamp, uuid, varchar, boolean} from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const exercise = pgTable('exercises', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  type: varchar('type', { length: 56 }).notNull(),
  muscle: varchar('muscle', { length: 56 }).notNull(),
  equipment: varchar('equipment', { length: 56 }).notNull(),
  difficulty: varchar('difficulty', { length: 56 }).notNull(),
  instructions: varchar('instructions', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});


export const insertExerciseSchema = createInsertSchema(exercise);

export type Exercise = InferSelectModel<typeof exercise>;
export type NewExercise = InferInsertModel<typeof exercise>;

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email').notNull().unique(),
  type: varchar('type', { length: 56 }).default('strength'),
  difficulty: varchar('difficulty', { length: 56 }).default('beginner')
});

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const insertUserSchema = createInsertSchema(users);

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;