import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-400 p-5">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <h2 className="text-4xl text-white font-bold mb-4">
                        Browse Blogs
                    </h2>
                    <Link
                        href={"/blogs"}
                        className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded"
                    >
                        See all
                    </Link>
                </div>
            </div>
        </>
    );
}
