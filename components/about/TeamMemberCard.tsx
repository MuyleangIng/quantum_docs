import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMemberCardProps {
    name: string
    role: string
    image: string
}

export function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{role}</p>
            </div>
        </motion.div>
    )
}

