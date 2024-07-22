import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const store = await db.post.create({
            data: {
                title: data.title,
                content: data.content,
                tagId: data.tagId,
            },
        });
        return NextResponse.json({ message: 'Data Received', store }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: 'Error storing data' }, { status: 500 });
    }
}


