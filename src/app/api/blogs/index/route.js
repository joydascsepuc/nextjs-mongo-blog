import { NextResponse } from "next/server";
import connectToDB from "../../../database/connectDB";
import Blog from "../../../models/blog";

export async function GET(req) {
    try {
        await connectToDB(); // Connection to DB

        // Get data from Database
        const blogs = await Blog.find({});
        if (blogs) {
            return NextResponse.json({
                success: true,
                data: blogs,
            });
        }

        // Default error / message if not created!
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again!",
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again!",
        });
    }
}
