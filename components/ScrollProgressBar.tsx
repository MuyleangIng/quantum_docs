'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpCircle } from 'lucide-react'

const ScrollProgressBar = () => {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Track scroll percentage for display
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight
            const percentage = Math.round((scrollPosition / windowHeight) * 100)
            
            setScrollPercentage(percentage)
            setIsVisible(scrollPosition > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {/* Progress Bar Container */}
            <motion.div
                className="fixed top-16 left-0 right-0 h-1 bg-gray-200 z-50"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            >
                {/* Animated Progress Bar */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-full bg-slate-500"
                    style={{
                        scaleX,
                        transformOrigin: "0%",
                    }}
                />
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-6 w-10 h-10 p-2 rounded-full bg-slate-500 text-white shadow-lg hover:bg-slate-600 transition-colors duration-300 z-50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.5
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowUpCircle className="w-6 h-6" />
            </motion.button>
        </>
    )
}

export default ScrollProgressBar