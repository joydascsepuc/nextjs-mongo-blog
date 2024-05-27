const ShowAllBlogs = ({ blogsData }: { blogsData: any }) => {
    console.log(blogsData);

    return (
        <>
            <div>
                <ul>
                    {blogsData.map((blog: any) => {
                        return <li key={blog._id}>{blog.title}</li>;
                    })}
                </ul>
            </div>
        </>
    );
};

export default ShowAllBlogs;
