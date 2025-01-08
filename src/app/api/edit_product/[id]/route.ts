import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

interface URLParams {
  params: {
    id: string; 
  };
}

export async function PUT(request: NextRequest, URLParams: URLParams) {
    try {
        const body = await request.json();
        const id = URLParams.params.id;
        const { name, category, price } = body;

        await connectMongoDB();

        console.log(id, name, category, price);

        const data = await Product.findByIdAndUpdate(id, {
            name, 
            category, 
            price,
        });

        return NextResponse.json({ msg: "Update Successfully", data });
    } catch (error) {
        return NextResponse.json(
            {
                error,
                msg: "Something Went Wrong"
            }, 
            { status: 400 }
        );
    }
}
