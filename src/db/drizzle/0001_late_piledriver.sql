ALTER TABLE "exercises" ADD COLUMN "name" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "exercises" ADD COLUMN "type" varchar(56) NOT NULL;--> statement-breakpoint
ALTER TABLE "exercises" ADD COLUMN "muscle" varchar(56) NOT NULL;--> statement-breakpoint
ALTER TABLE "exercises" ADD COLUMN "equipment" varchar(56) NOT NULL;--> statement-breakpoint
ALTER TABLE "exercises" ADD COLUMN "difficulty" varchar(56) NOT NULL;--> statement-breakpoint
ALTER TABLE "exercises" ADD COLUMN "instructions" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "exercises" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "exercises" DROP COLUMN IF EXISTS "content";