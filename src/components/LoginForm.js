import React, { useState } from 'react';
/* here is the logic of the login form where it handle the validation from the username and password  */
const LoginForm = () => {
  const [email, setEmail] = useState(''); /* using usestate for the initial value of empty string, and set email and password to update it */
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); /* create a error object to handle the the error message validation*/
  const [showPassword, setShowPassword] = useState(false); /*manage the password if it is show or hidden */

  const handleSubmit = (e) => {
    e.preventDefault();/*Prevents the form from reloading the page when it's submitted.*/
    const newErrors = {};

    if (!email) newErrors.email = 'Email is required'; /*validation for the email the must be filled.*/
    if (!password) newErrors.password = 'Password is required'; /*validation for the password also must be filled.*/
    else if (password.length < 6)      /*Checks if the password is at least 6 characters long.*/ 
      newErrors.password = 'Password must be at least 6 characters long';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted');
    }
  };

  return (/* use return to display the tailwind and html structure . this section is the appearance of the form */ 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-600">
  <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md transform transition-all hover:scale-105">  {/*apply hover to the and zoom in the card or div */}  
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Welcome Back!      {/* heading */}                                     
    </h2>
    <form onSubmit={handleSubmit}>

      {/* Email Input */}
      <div className="mb-6 relative">
        <label className="block mb-1 text-gray-600 font-semibold">
          Email
        </label>
        <input
          type="email"
          className={`w-full px-4 py-2 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password Input */}
      <div className="mb-6 relative">
        <label className="block mb-1 text-gray-600 font-semibold">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className={`w-full px-4 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold tracking-wide shadow-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
      >
        Login
      </button>
    </form>

    {/* Forgot Password */}
    <div className="text-center mt-6">
      <a
        href="#"
        className="text-sm text-gray-500 hover:text-gray-900 hover:underline transition-all duration-300"
      >
        Forgot your password?
      </a>
    </div>
  </div>
</div>
  );
};

export default LoginForm;
