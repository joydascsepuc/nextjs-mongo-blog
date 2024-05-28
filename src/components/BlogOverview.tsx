"use client";

import AddNewBlog from "@/components/add-new-blog/add-new-blog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ShowAllBlogs from "./show-all-blog/show-all-blog";

const initialBlogFormData = {
    title: "",
    description: "",
};

const BlogOverview = ({ blogsData }: { blogsData: any }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
    const [currentEditedBlogID, setCurrentEditedBlogID] = useState(null);

    // For refreshing the listing
    const router = useRouter();
    useEffect(() => {
        router.refresh();
    }, []);

    async function handleSaveBlogData() {
        setLoading(true);
        try {
            const apiResponse = currentEditedBlogID
                ? await fetch(`/api/blogs/update?id=${currentEditedBlogID}`, {
                      method: "PUT",
                      body: JSON.stringify(blogFormData),
                  })
                : await fetch("/api/blogs/store", {
                      method: "POST",
                      body: JSON.stringify(blogFormData),
                  });
            const result = await apiResponse.json();
            if (result?.status) {
                setLoading(false);
                setOpenDialog(false);
                setBlogFormData(initialBlogFormData);
                setCurrentEditedBlogID(null);
                router.refresh();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setBlogFormData(initialBlogFormData);
            setCurrentEditedBlogID(null);
        }
    }

    const handleEdit = (currentBlog: any) => {
        setCurrentEditedBlogID(currentBlog?._id);
        setBlogFormData({
            title: currentBlog?.title,
            description: currentBlog?.description,
        });
        setOpenDialog(true);
    };

    return (
        <>
            <div className="min-h-screen flex justify-center flex-col gap-10 items-center bg-gradient-to-r from-purple-600 to-blue-400 p-5">
                <AddNewBlog
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    loading={loading}
                    blogFormData={blogFormData}
                    setBlogFormData={setBlogFormData}
                    initialBlogFormData={initialBlogFormData}
                    handleSaveBlogData={handleSaveBlogData}
                    currentEditedBlogID={currentEditedBlogID}
                    setCurrentEditedBlogID={setCurrentEditedBlogID}
                />

                <h2 className="text-4xl text-white font-bold mb-4">
                    All Blogs
                </h2>
                <ShowAllBlogs
                    blogsData={blogsData}
                    router={router}
                    handleEdit={handleEdit}
                />
            </div>
        </>
    );
};

export default BlogOverview;
