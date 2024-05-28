import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const ShowAllBlogs = ({
    blogsData,
    router,
    handleEdit,
}: {
    blogsData: any;
    router: any;
    handleEdit: any;
}) => {
    const handleDeleteBlogByID = async (blogID: string) => {
        try {
            const apiResponse = await fetch(`/api/blogs/destroy?id=${blogID}`, {
                method: "DELETE",
            });
            const result = await apiResponse.json();
            if (result?.status) {
                router.refresh();
            }
            return result?.status;
        } catch (error) {
            console.log(error);
            router.refresh();
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {blogsData && blogsData.length > 0 ? (
                    blogsData.map((blog: any) => {
                        return (
                            <Card key={blog._id} className="p-5">
                                <CardContent>
                                    <CardTitle>{blog.title}</CardTitle>
                                    <CardDescription>
                                        {blog.description}
                                    </CardDescription>
                                    <div className="mt-5 flex gap-5 justify-center items-center">
                                        <Button
                                            onClick={() => handleEdit(blog)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                handleDeleteBlogByID(blog._id);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })
                ) : (
                    <p className="text-4xl text-center">No data!</p>
                )}
            </div>
        </>
    );
};

export default ShowAllBlogs;
