import React, { useState } from "react";
import Navbar from '../components/Navbar';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('https://img5.pic.in.th/file/secure-sv1/1dac286e1af55b21b.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="flex items-center justify-center flex-1 relative">
        {/* Simulated laptop screen overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-lg shadow-lg overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 90% 100%, 10% 100%, 0 80%)' }}></div>
        <div className="relative bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md z-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">LOGIN</h2>
          
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                placeholder="Enter your email"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">📧</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                placeholder="Enter your password"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300">👁️</span>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-gray-300 hover:underline">
                Forget Password
              </a>
            </div>
          </div>

          <button
            className="w-full bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 transition duration-200 font-semibold"
          >
            Login
          </button>

          <div className="text-center mt-6">
            <a className="text-sm text-gray-300 ">
              Add other accounts
            </a>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="p-2 bg-white/20 rounded-full shadow hover:shadow-lg">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-2 bg-white/20 rounded-full shadow hover:shadow-lg">
              <span className="text-blue-300 text-xl">📧</span>
            </button>
            <button className="p-2 bg-white/20 rounded-full shadow hover:shadow-lg">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;