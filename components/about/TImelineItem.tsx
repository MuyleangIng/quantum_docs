import { motion } from 'framer-motion'

interface TimelineItemProps {
    year: string
    title: string
    description: string
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
    return (
        <motion.div
            className="mb-8 flex justify-between items-center w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
            </div>
            <div className="order-1 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 dark:text-gray-200 text-xl">{title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-400">{description}</p>
            </div>
        </motion.div>
    )
}

