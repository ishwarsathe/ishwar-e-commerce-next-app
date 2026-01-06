import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
            <main className="flex min-h-screen w-full max-w-7xl flex-col gap-2 items-center bg-white">
                <h1 className="text-5xl my-8">Not Found</h1>
                <p className="text-3xl">Oops! This page doesn`t exist</p>
                <Link href="/">
                    <button className="cursor-pointer px-5 h-10 rounded-sm hover:bg-black hover:text-white">Return Home</button>
                </Link>
            </main>
        </div>
    )
}