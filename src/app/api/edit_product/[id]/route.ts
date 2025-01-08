import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const id = request.nextUrl.pathname.split("/").pop();  
        const { name, category, price } = body;

        
        if (!id) {
            return NextResponse.json({ msg: "Product ID is required" }, { status: 400 });
        }

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
                error: error instanceof Error ? error.message : "Something Went Wrong",
                msg: "Something Went Wrong"
            },
            { status: 400 }
        );
    }
}
