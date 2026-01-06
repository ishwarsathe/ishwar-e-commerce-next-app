export default function AuthLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col w-6xl py-8 px-5">
            <h2 className="text-center text-3xl text-green-700">Welcome to our green Community</h2>
            {children}
        </div>
    )
}