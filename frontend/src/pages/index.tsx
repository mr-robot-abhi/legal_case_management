import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold">Welcome to Legal Case Manager</h1>
      <p className="mt-4 text-lg">Manage your legal cases efficiently and securely.</p>
      <div className="mt-6 flex space-x-4">
        <Link href="/auth/login">
          <Button text="Login" />
        </Link>
        <Link href="/auth/signup">
          <Button text="Sign Up" variant="secondary" />
        </Link>
      </div>
    </motion.div>
  );
}
