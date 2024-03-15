-- CreateTable
CREATE TABLE "Flow" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Flow_pkey" PRIMARY KEY ("id")
);
