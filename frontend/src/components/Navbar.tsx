import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <motion.nav 
      className="bg-white shadow-md p-4 flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Logo */}
      <Link href="/">
        <span className="text-2xl font-bold text-blue-600 cursor-pointer">LegalCase</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/dashboard/cases" className="hover:text-blue-500">Cases</Link>
        <Link href="/dashboard/lawyers" className="hover:text-blue-500">Lawyers</Link>
        <Link href="/dashboard/chat" className="hover:text-blue-500">Chat</Link>
        <Link href="/dashboard/payments" className="hover:text-blue-500">Payments</Link>
      </div>

      {/* User Dropdown */}
      {user ? (
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {user.name}
          </button>
          {isDropdownOpen && (
            <motion.div 
              className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <button 
                onClick={logout} 
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        <Link href="/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </Link>
      )}
    </motion.nav>
  );
};

export default Navbar;
