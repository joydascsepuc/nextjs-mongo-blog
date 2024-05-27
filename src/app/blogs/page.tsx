import BlogOverview from "@/components/BlogOverview";

async function getAllBlogs() {
    try {
        const apiResponse = await fetch(
            "http://localhost:3000/api/blogs/index",
            {
                method: "GET",
                cache: "no-store",
            }
        );

        const result = await apiResponse.json();
        return result?.data;
    } catch (error) {
        console.log(error);
    }
}

const BlogListing = async () => {
    const blogsData = await getAllBlogs();

    return (
        <>
            <BlogOverview blogsData={blogsData} />
        </>
    );
};

export default BlogListing;
