import { NextResponse } from "next/server";
import connectToDB from "../../../database/connectDB";
import Joi from "joi";
import Blog from "../../../models/blog";

// Validation rules
const validationRules = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});

export async function POST(req) {
    try {
        await connectToDB(); // Connection to DB

        // Validation of data using joi validation package
        const extractRequest = await req.json();
        const { title, description } = extractRequest;
        const { validationError } = validationRules.validate({
            title,
            description,
        });

        if (validationError) {
            return NextResponse.json({
                status: false,
                message: validationError.details[0].message,
            });
        }

        // Now create / insert the data in DB by Model
        const createBlog = await Blog.create(extractRequest);
        if (createBlog) {
            return NextResponse.json({
                status: true,
                message: "Blog added!",
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
