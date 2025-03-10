import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div 
      className="flex justify-center items-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
};

export default Loader;
