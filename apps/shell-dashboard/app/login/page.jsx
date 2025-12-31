"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    async function login() {
        await fetch("/api/login", { method: "POST" });
        router.push("/dashboard");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form action={login} className="bg-white p-8 rounded shadow w-96">
                <h2 className="text-xl font-bold mb-6">Login</h2>

                <input
                    placeholder="Email"
                    className="border p-2 w-full mb-4"
                />
                <input
                    placeholder="Password"
                    type="password"
                    className="border p-2 w-full mb-6"
                />

                <button className="bg-blue-600 text-white w-full py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}
