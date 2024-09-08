import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Properties";
import { getSessionUser } from "@/utils/getSessionUser";

// GET /api/properties
export const GET = async (request) => {
    try {
        await connectDB();
        const properties = await Property.find({});
        return new Response(JSON.stringify(properties), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response('Something Went Wrong', {
            status: 500
        })
    }
}

export const POST = async (request) => {
    try {
        await connectDB();

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', { status: 401 })
        }

        const { userId } = sessionUser;


        const imageUplodPromise = [];
        
        for (const image of images){
            const imageBuffer = await image.arrayBuffer();
        }

        const formData = await request.formData();
        const amenities = formData.getAll('amenities')
        const images = formData.getAll('images').filter((image) => image.name !== '')

        return new Response(JSON.stringify({
            message: 'Success'
        }), { status: 200 })
    } catch (error) {
        return new Response('Failed to add property', { status: 500 })
    }
}