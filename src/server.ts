import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { string, z } from 'zod';

const app = fastify();

const prisma = new PrismaClient();


app.get('/sensor', async () => {
    const sensor = await prisma.sensor.findMany();

    return { sensor }
});

app.post('/sensor', async (request, replay) => {
    const createSensorSchema = z.object({
        nome: z.string(),
        valor: z.number(),
    });

    const { nome, valor } = createSensorSchema.parse(request.body);

    await prisma.sensor.create({
        data: {
            nome, 
            valor,
        }
    });


    return replay.status(201).send();
});

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
    console.log("HTTP server Runing")
})