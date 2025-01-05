'use client';

import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function AnimatedFeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="p-6 rounded-2xl bg-white dark:bg-dark-500 shadow-xl"
    >
      <div className="w-12 h-12 mb-4 text-teacch-orange">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-3 text-dark-500 dark:text-white">
        {feature.title}
      </h3>
      <p className="text-dark-400 dark:text-gray-300">{feature.description}</p>
    </motion.div>
  );
} 