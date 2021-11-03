DROP TABLE IF EXISTS app_user, person, cic, foster_home, foster_parent, placing_agency, placing_agency_worker, placement CASCADE;
DROP TYPE IF EXISTS sex_enum;

CREATE TYPE "sex_enum" AS ENUM (
  'female',
  'male',
  'intersex'
);

CREATE TABLE "app_user" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "person" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar,
  "birth_date" date,
  "sex" sex_enum,
  "gender" varchar,
  "religion" varchar,
  "ethnicity" varchar,
  "sexual_orientation" varchar,
  "user_id" uuid UNIQUE
);

CREATE TABLE "cic" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "person_id" uuid UNIQUE NOT NULL
);

CREATE TABLE "foster_home" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "email" varchar,
  "name" varchar UNIQUE NOT NULL
);

CREATE TABLE "foster_parent" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "foster_home_id" uuid NOT NULL,
  "person_id" uuid UNIQUE NOT NULL
);

CREATE TABLE "placing_agency" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "name" varchar NOT NULL
);

CREATE TABLE "placing_agency_worker" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "position" varchar NOT NULL,
  "person_id" uuid UNIQUE NOT NULL,
  "placing_agency_id" uuid NOT NULL
);

CREATE TABLE "placement" (
  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "cic_id" uuid NOT NULL,
  "foster_home_id" uuid NOT NULL,
  "placing_agency_id" uuid NOT NULL,
  "placement_date" date,
  "discharge_date" date,
  "active" boolean DEFAULT true
);

ALTER TABLE "person" ADD FOREIGN KEY ("user_id") REFERENCES "app_user" ("id");

ALTER TABLE "cic" ADD FOREIGN KEY ("person_id") REFERENCES "person" ("id");

ALTER TABLE "foster_parent" ADD FOREIGN KEY ("foster_home_id") REFERENCES "foster_home" ("id");

ALTER TABLE "foster_parent" ADD FOREIGN KEY ("person_id") REFERENCES "person" ("id");

ALTER TABLE "placing_agency_worker" ADD FOREIGN KEY ("person_id") REFERENCES "person" ("id");

ALTER TABLE "placing_agency_worker" ADD FOREIGN KEY ("placing_agency_id") REFERENCES "placing_agency" ("id");

ALTER TABLE "placement" ADD FOREIGN KEY ("cic_id") REFERENCES "cic" ("id");

ALTER TABLE "placement" ADD FOREIGN KEY ("foster_home_id") REFERENCES "foster_home" ("id");

ALTER TABLE "placement" ADD FOREIGN KEY ("placing_agency_id") REFERENCES "placing_agency" ("id");
