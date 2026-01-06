"use client";

import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-white">
            <div className="w-full max-w-md p-8 shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Login to your account
                </h1>
                <form className="flex flex-col gap-4">
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
                        autoComplete={"current-password"}
                        required
                    />
                    <input
                        type="password"
                        className="border rounded px-3 py-2 bg-white text-black"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        required
                    />
                    <Link href={"/"}>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition mt-2"
                        >
                            Login
                        </button>
                    </Link>
                </form>
                <p className="mt-6 text-center text-sm text-black">
                    Don`t have an account?{" "}
                    <Link href={"/register"}>
                        <button
                            type="button"
                            // onClick={() => setMode("signup")}
                            className="text-blue-600 hover:underline font-medium cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </Link>
                </p>
            </div>
        </main>
    );
}
