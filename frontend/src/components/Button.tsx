import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const Button = ({ label, onClick, type = "button", className }: ButtonProps) => {
  return (
    <motion.button
      className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition ${className}`}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

export default Button;
