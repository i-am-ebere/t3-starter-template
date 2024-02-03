import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Login() {
  const [error, setError] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    }

    if (result.url) window.location.href = result.url;
  };

  const renderStars = () => {
    // Assuming a dynamic star rating, for example 4 out of 5
    const rating = 4;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : regularStar}
          className="text-yellow-400"
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center pl-20 pr-10 py-10">
        <h1 className="text-5xl font-bold mb-6">Welcome to our community</h1>
        <p className="text-lg mb-10">Clarity gives you the blocks & components you need to create a truly professional website.</p>
        <div className="flex items-center mb-4">
          {renderStars()}
        </div>
        <blockquote className="text-2xl mb-6">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</blockquote>
        <div className="flex items-center">
          <p className="text-lg">Devon Lane</p>
          <p className="text-sm text-blue-200 ml-2">Co-Founder, Design.co</p>
        </div>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <div className="w-full max-w-xl px-10">
          <h2 className="text-4xl font-bold mb-6">Welcome back!</h2>
          <p className="text-lg text-gray-500 mb-10">Clarity gives you the blocks and components you need to create a truly professional website.</p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSignIn} className="flex flex-col space-y-6">
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-900 mb-2">Email address</label>
              <input type="email" id="email" name="email" required className="w-full h-12 bg-gray-100 border border-gray-300 rounded-md px-4" />
            </div>
            <div>
              <label htmlFor="password" className="block text-md font-medium text-gray-900 mb-2">Password</label>
              <input type="password" id="password" name="password" required className="w-full h-12 bg-gray-100 border border-gray-300 rounded-md px-4" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full h-12 bg-blue-600 rounded-lg text-white font-medium">Sign in</button>
          </form>
          <p className="text-sm text-center mt-4">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Create free account</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;