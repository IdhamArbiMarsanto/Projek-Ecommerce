import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    try {
        
        const id = request.nextUrl.pathname.split("/").pop();

        
        if (!id) {
            return NextResponse.json({ msg: "Product ID is required" }, { status: 400 });
        }

        await connectMongoDB();

     
        await Product.findByIdAndDelete(id);

        return NextResponse.json({ msg: "Product Deleted Successfully" });
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
