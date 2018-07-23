CREATE DATABASE "pethotel";

CREATE TABLE "pets" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80),
  "color" VARCHAR(80),
  "breed" VARCHAR(80),
  "age" INTEGER,
  "image_path" VARCHAR(200),
  "owner_id" INT references "owner" (id) ON DELETE CASCADE NOT NULL,
  "checkIn" BOOLEAN DEFAULT FALSE
	);

CREATE TABLE "owner"(
	"id" SERIAL PRIMARY KEY,
	"firstName" VARCHAR(80),
	"lastName" VARCHAR(80),
	"city" VARCHAR(100),
	"image_path" VARCHAR(200)
	);

INSERT INTO "pets"("name","color","breed","age","image_path","owner_id","checkIn")
VALUES ('Poky-Dot','White and Black', 'dalmatian', '1','dog.jpeg','1','false');

INSERT INTO "owner"("firstName","lastName","city","image_path")
VALUES ('Roger','Radcliffe','London','Roger_Radcliffe.png');