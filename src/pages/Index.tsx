import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Skills />
    </motion.div>
  );
};

export default Index;