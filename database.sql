CREATE DATABASE "pethotel";

CREATE TABLE "owner"(
	"id" SERIAL PRIMARY KEY,
	"FirstName" VARCHAR(80),
	"LastName" VARCHAR(80),
	"owner_id"INTEGER
	);
	

CREATE TABLE "pets"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80),
    "color" VARCHAR(80),
    "type" VARCHAR(10),
    "breed" VARCHAR(80),
    "age" INTEGER,
    "checkIn" BOOLEAN
);

INSERT INTO "pets"("name","color","type","breed","age","checkIn")
VALUES ('Poky-Dot','White and Black', 'DOG','dalmatian', '1', 'true');

INSERT INTO "owner"("FirstName","LastName","owner_id")
VALUES ('Roger','Radcliffe','1');