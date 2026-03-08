-- CreateTable
CREATE TABLE "BookingRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "pickupCity" TEXT,
    "groupSize" INTEGER,
    "useCase" TEXT,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'REQUESTED'
);
