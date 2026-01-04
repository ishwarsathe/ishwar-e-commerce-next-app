"use client";

import React, { useState } from "react";

export default function AuthPage() {
    const [mode, setMode] = useState<"login" | "signup">("login");

    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-white">
            <div className="w-full max-w-md p-8 shadow rounded-lg border bg-white">
                <h1 className="text-2xl font-bold mb-6 text-center text-black">
                    {mode === "login" ? "Login to your account" : "Create an account"}
                </h1>
                <form className="flex flex-col gap-4">
                    {mode === "signup" && (
                        <input
                            type="text"
                            className="border rounded px-3 py-2 bg-white text-black"
                            placeholder="Full Name"
                            autoComplete="name"
                            required
                        />
                    )}
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
                        autoComplete={mode === "signup" ? "new-password" : "current-password"}
                        required
                    />
                    {mode === "signup" && (
                        <input
                            type="password"
                            className="border rounded px-3 py-2 bg-white text-black"
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            required
                        />
                    )}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition mt-2"
                    >
                        {mode === "login" ? "Login" : "Sign Up"}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-black">
                    {mode === "login" ? (
                        <>
                            {`Don't have an account? `}
                            <button
                                type="button"
                                onClick={() => setMode("signup")}
                                className="text-blue-600 hover:underline font-medium cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setMode("login")}
                                className="text-blue-600 hover:underline font-medium cursor-pointer"
                            >
                                Login
                            </button>
                        </>
                    )}
                </p>
            </div>
        </main>
    );
}
