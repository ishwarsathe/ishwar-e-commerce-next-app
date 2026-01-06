"use client";

import Link from "next/link";

export default function registerPage() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-white">
            <div className="w-full max-w-md p-8 shadow bg-white">
                <h1 className="text-2xl font-bold mb-6 text-center text-black">
                    Create an account
                </h1>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="border rounded px-3 py-2 bg-white text-black"
                        placeholder="Full Name"
                        autoComplete="name"
                        required
                    />
                    <input
                        type="email"
                        className="border rounded px-3 py-2 bg-white text-black"
                        placeholder="Email"
                        autoComplete="email"
                        required
                    />
                    <input
                        type="password"
                        className="border rounded px-3 py-2 bg-white text-black"
                        placeholder="Password"
                        autoComplete={"new-password"}
                        required
                    />
                    <input
                        type="password"
                        className="border rounded px-3 py-2 bg-white text-black"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition mt-2"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-black">
                    <Link href={"/login"}>
                        Already have an account?{" "}
                        <button
                            type="button"
                            className="text-blue-600 hover:underline font-medium cursor-pointer"
                        >
                            Login
                        </button>
                    </Link>
                </p>
            </div>
        </main>
    );
}
