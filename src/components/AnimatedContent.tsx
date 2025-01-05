'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedContent({ children, delay = 0 }: AnimatedContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
} 