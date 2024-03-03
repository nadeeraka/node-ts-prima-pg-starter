ALTER TABLE "users" ADD COLUMN "email" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "type" varchar(56) DEFAULT 'strength';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "difficulty" varchar(56) DEFAULT 'beginner';--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");