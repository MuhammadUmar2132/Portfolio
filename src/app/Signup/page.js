'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    // if (formData.password !== formData.confirmPassword) {
    //   newErrors.confirmPassword = 'Passwords do not match';
    // }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('http://localhost:8006/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })
        });

        const data = await response.json();
        setIsSubmitting(false);

        if (response.ok) {
          alert('Signup successful!');
          // Optional: redirect to login
          // router.push('/login');
        } else {
          alert(data.message || 'Signup failed!');
        }
      } catch (error) {
        setIsSubmitting(false);
        alert('Something went wrong. Please try again later.');
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.03,
      boxShadow: '0px 5px 15px rgba(0, 255, 163, 0.3)',
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 mt-[5rem]"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-center border-b border-gray-700">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              Join Us
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 mt-2 text-sm"
            >
              Create your account to get started
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Full Name */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${errors.name ? 'border-rose-500' : 'border-gray-600'} focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-gray-100 placeholder-gray-400`}
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${errors.email ? 'border-rose-500' : 'border-gray-600'} focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-gray-100 placeholder-gray-400`}
                placeholder="john@example.com"
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                {errors.password && <p className="text-xs text-rose-400">{errors.password}</p>}
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${errors.password ? 'border-rose-500' : 'border-gray-600'} focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-gray-100 placeholder-gray-400`}
                placeholder="••••••••"
              />
            </motion.div>
{/* 
            Confirm Password */}
            <motion.div variants={itemVariants}>
              {/* <div className="flex justify-between items-center mb-1">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>
                {errors.confirmPassword && <p className="text-xs text-rose-400">{errors.confirmPassword}</p>}
              </div> */}
              {/* <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 rounded-lg border ${errors.confirmPassword ? 'border-rose-500' : 'border-gray-600'} focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-gray-100 placeholder-gray-400`}
                placeholder="••••••••"
              /> */}
            </motion.div> 

            {/* Terms */}
            <motion.div variants={itemVariants} className="flex items-start pt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded bg-gray-700 border-gray-600 focus:ring-emerald-500 text-emerald-500"
                  required
                />
              </div>
              <label htmlFor="terms" className="ml-3 text-sm text-gray-300">
                I agree to the <a href="#" className="text-emerald-400 hover:underline">Terms and Conditions</a>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-gray-900 font-medium rounded-lg transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </span>
                ) : 'Sign Up'}
              </motion.button>
            </motion.div>
          </form>

          {/* Redirect Link */}
          <motion.div 
            variants={itemVariants}
            className="px-8 pb-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-emerald-400 font-medium hover:underline">
                Log in
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
