import { useState } from "react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function Login() {
  const [error, setError] = useState("");

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    }

    if (result?.url) window.location.href = result.url;
  };

  const renderStars = () => {
    // Assuming a dynamic star rating, for example 4 out of 5
    const rating = 4;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={solidStar}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        />,
      );
    }
    return stars;
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex w-1/2 flex-col justify-center bg-blue-600 py-10 pl-20 pr-10 text-white">
        <h1 className="mb-6 text-5xl font-bold">Welcome to our community</h1>
        <p className="mb-10 text-lg">
          Clarity gives you the blocks & components you need to create a truly
          professional website.
        </p>
        <div className="mb-4 flex items-center">{renderStars()}</div>
        <blockquote className="mb-6 text-2xl">
          "We love Landingfolio! Our designers were using it for their projects,
          so we already knew what kind of design they want."
        </blockquote>
        <div className="flex items-center">
          <p className="text-lg">Devon Lane</p>
          <p className="ml-2 text-sm text-blue-200">Co-Founder, Design.co</p>
        </div>
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center bg-white">
        <div className="w-full max-w-xl px-10">
          <h2 className="mb-6 text-4xl font-bold">Welcome back!</h2>
          <p className="mb-10 text-lg text-gray-500">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSignIn} className="flex flex-col space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-md mb-2 block font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 px-4"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-md mb-2 block font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 px-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="h-12 w-full rounded-lg bg-blue-600 font-medium text-white"
            >
              Sign in
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Create free account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
