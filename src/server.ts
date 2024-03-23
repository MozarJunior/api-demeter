import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { string, z } from 'zod';

const app = fastify();

const prisma = new PrismaClient();


app.get('/', async () => {
    const sensor = await prisma.flow.findMany();

    return { sensor }
});

app.post('/flow', async (request, replay) => {
    const createSensorSchema = z.object({
        nome: z.string(),
        valor: z.string(),
    });

    const { nome, valor } = createSensorSchema.parse(request.body);

    await prisma.flow.create({
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