import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';

import * as schema from './schema';
import {neon} from "@neondatabase/serverless";


export const connect:any = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db: NodePgDatabase<typeof schema> = drizzle(connect, { schema });