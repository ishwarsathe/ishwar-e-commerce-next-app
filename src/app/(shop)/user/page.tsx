"use client";

export default function AccountPage() {
    // Example/mock user info
    const user = {
        name: "Ishwar Sathe",
        email: "ishwar@example.com",
        membership: "Premium",
        joined: "January 2023",
    };

    return (
        <main className="max-w-3xl mx-auto py-16 px-4 bg-white rounded shadow mt-6">
            <h1 className="text-3xl font-bold mb-8 text-blue-900">My Account</h1>
            <div className="flex flex-col gap-4 text-lg">
                <div>
                    <span className="font-semibold text-black">Name:</span> {user.name}
                </div>
                <div>
                    <span className="font-semibold text-black">Email:</span> {user.email}
                </div>
                <div>
                    <span className="font-semibold text-black">Membership:</span> {user.membership}
                </div>
                <div>
                    <span className="font-semibold text-black">Joined:</span> {user.joined}
                </div>
            </div>
        </main>
    );
}
