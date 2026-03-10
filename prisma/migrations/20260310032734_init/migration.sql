-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('REQUESTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "BookingRequest" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "pickupCity" TEXT,
    "groupSize" INTEGER,
    "useCase" TEXT,
    "notes" TEXT,
    "status" "BookingStatus" NOT NULL DEFAULT 'REQUESTED',

    CONSTRAINT "BookingRequest_pkey" PRIMARY KEY ("id")
);
