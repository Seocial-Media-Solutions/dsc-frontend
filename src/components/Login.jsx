import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { User, Lock, AlertCircle } from 'lucide-react';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(credentials);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#829280] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-md w-full mx-auto space-y-8 p-6 sm:p-10 bg-white rounded-xl shadow-2xl my-8"
      >
        {/* Logo Section */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <div className="bg-[#829280] rounded-xl flex items-center justify-center">
            {/* Replace this div with your actual logo */}
            <span className="text-white text-2xl font-bold p-2">
              <img src="images/DSC-logo.png" alt="" className='h-40'/>
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-center">
            Admin Panel
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Please sign in to your account
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 bg-red-50 p-4 rounded-lg"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-500 text-sm">{error}</p>
          </motion.div>
        )}

        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#829280] hover:bg-[#829300] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              Sign in
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;