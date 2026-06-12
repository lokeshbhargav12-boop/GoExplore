import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'cars.json');

export async function GET() {
    try {
        const file = await fs.readFile(dataFile, 'utf-8');
        const data = JSON.parse(file);
        return NextResponse.json(data);
    } catch (error) {
        return new NextResponse('Failed to read cars data', { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const newCar = await request.json();
        const file = await fs.readFile(dataFile, 'utf-8');
        const data = JSON.parse(file);
        data.push(newCar);
        await fs.writeFile(dataFile, JSON.stringify(data, null, 2), 'utf-8');
        return NextResponse.json({ message: 'Car added', car: newCar });
    } catch (error) {
        return new NextResponse('Failed to add car', { status: 500 });
    }
}