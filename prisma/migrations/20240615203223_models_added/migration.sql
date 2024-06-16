-- CreateTable
CREATE TABLE "info" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "info_pkey" PRIMARY KEY ("id")
);
