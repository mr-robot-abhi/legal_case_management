import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiBriefcase, FiUsers, FiMessageSquare, FiDollarSign } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-blue-500 text-2xl md:hidden p-2"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Sidebar Container */}
      <motion.div 
        className={`fixed left-0 top-0 h-full bg-gray-900 text-white p-5 w-64 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h2 className="text-lg font-semibold">LegalCase</h2>

        <nav className="mt-6 space-y-4">
          <Link href="/dashboard/cases" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <FiBriefcase /> Cases
          </Link>
          <Link href="/dashboard/lawyers" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <FiUsers /> Lawyers
          </Link>
          <Link href="/dashboard/chat" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <FiMessageSquare /> Chat
          </Link>
          <Link href="/dashboard/payments" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md">
            <FiDollarSign /> Payments
          </Link>
        </nav>
      </motion.div>
    </div>
  );
};

export default Sidebar;
