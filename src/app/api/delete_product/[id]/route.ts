import Product from "@/libs/models/Products";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

interface URLParams {
  params: {
    id: string; 
  };
}

export async function DELETE(request: NextRequest, URLParams: URLParams) {
    try {
        const id = URLParams.params.id;

        await connectMongoDB();


        await Product.findByIdAndDelete(id);

        return NextResponse.json({ msg: "Product Delete Successfully"});
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
