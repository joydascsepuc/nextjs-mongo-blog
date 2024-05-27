import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const ShowAllBlogs = ({ blogsData }: { blogsData: any }) => {
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
                                        <Button>Edit</Button>
                                        <Button>Delete</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })
                ) : (
                    <p>No data!</p>
                )}
            </div>
        </>
    );
};

export default ShowAllBlogs;
