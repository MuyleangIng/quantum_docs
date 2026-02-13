import { motion } from 'framer-motion'

interface SectionTitleProps {
    children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <motion.h2
            className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.h2>
    )
}

