import { NextResponse } from "next/server";
import connectToDB from "../../../database/connectDB";
import Blog from "../../../models/blog";

export async function DELETE(req) {
    try {
        await connectToDB(); // Connection to DB

        // Delete using params
        const { searchParams } = new URL(req.url);
        const getCurrentBlogID = searchParams.get("id");

        if (!getCurrentBlogID) {
            return NextResponse.json({
                status: false,
                message: "Invalid blog ID",
            });
        }

        const deleteBlog = await Blog.findByIdAndDelete(getCurrentBlogID);
        console.log(deleteBlog);
        if (deleteBlog) {
            return NextResponse.json({
                status: true,
                message: "Blog deleted!",
            });
        }

        // Default error / message if not created!
        return NextResponse.json({
            status: false,
            message: "Something went wrong! Please try again!",
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: false,
            message: "Something went wrong! Please try again!",
        });
    }
}
