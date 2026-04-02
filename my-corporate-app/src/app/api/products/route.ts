import { NextResponse } from 'next/server';
import { db } from '@/src/lib/prisma';
import * as z from 'zod'; // Валидация

// 1. Схема валидации (чтобы не пропустить мусор в БД)
const productSchema = z.object({
    name: z.string().min(3),
    desciption: z.string().min(3),
    price: z.number().positive(),
});

export const apiGet = () => {
    try {
        const products = db.product.findMany();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}

export const apiPush = (req : Request, res: Response) => {
    const body = res.json()
    return body
}


