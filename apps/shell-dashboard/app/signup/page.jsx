import { redirect } from "next/navigation";

export default function SignupPage() {
  async function signup(formData) {
    "use server";

    // In a real app:
    // 1. Validate formData
    // 2. Call backend to create user
    // 3. Handle errors

    // For demo → just redirect to login
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form action={signup} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-6">Sign Up</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="border p-2 w-full mb-4"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-6"
          required
        />

        <button className="bg-green-600 text-white w-full py-2 rounded">
          Create Account
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
