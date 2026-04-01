import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-8xl font-serif mb-8 text-emerald-950">
        404
      </motion.h1>
      <motion.div
        animate={{ 
          rotate: [0, 70, 70, 0],
          scale: [1, 0.8, 0.8, 1],
          color: ["#e627a6", "#475569", "#475569", "#e627a6"],
          opacity: [1, 0.6, 0.6, 1]
        }}
        transition={{ 
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="mb-12">
        <Flower2 size={150} strokeWidth={1} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center max-w-lg mb-12">
        <h2 className="text-black text-3xl font-serif italic mb-4">Навіть найкрасивіші квіти зів'яли...</h2>
        <p className="text-xl text-slate-700 font-serif leading-relaxed">
          На жаль, сторінка, яку ви шукаєте, більше не цвіте. Але не сумуйте! Ми підготували для вас найсвіжіші букети у нашому квітнику.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}>
        <Link to="/" className="flex items-center gap-3 bg-[#8d9e88]  text-slate-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-500 transition-colors shadow-lg">
          Повернутися в сад 🌸
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;