"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddNewBlog = ({
    openDialog,
    setOpenDialog,
    loading,
    blogFormData,
    setBlogFormData,
    initialBlogFormData,
    handleSaveBlogData,
}: {
    openDialog: boolean;
    setOpenDialog: any;
    loading: boolean;
    blogFormData: any;
    setBlogFormData: any;
    initialBlogFormData: any;
    handleSaveBlogData: any;
}) => {
    return (
        <>
            <div>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                    Add Blog
                </Button>
            </div>
            <Dialog
                open={openDialog}
                onOpenChange={() => {
                    setOpenDialog(false);
                    setBlogFormData(initialBlogFormData);
                }}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Blog</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter blog title"
                                value={blogFormData.title}
                                onChange={(event) =>
                                    setBlogFormData({
                                        ...blogFormData,
                                        title: event.target.value,
                                    })
                                }
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                className="col-span-3"
                                placeholder="Enter blog description"
                                value={blogFormData.description}
                                onChange={(event) =>
                                    setBlogFormData({
                                        ...blogFormData,
                                        description: event.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" onClick={handleSaveBlogData}>
                            {loading ? "Saving ..." : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AddNewBlog;
