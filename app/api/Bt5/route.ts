import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const data = await fetch("https://fakestoreapi.com/products")
            .then((res) => res.json());

        console.log(data);
        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}
