'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'

import Image from 'next/image'

interface TeamMember {
  id: number
  name: string
  role: string
  quote: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rous Sovanra",
    role: "DevOps Engineer",
    quote: "Don't limit yourself or Say no to fast. At least give it a try.",
    imageUrl: "/team/sovanra.jpg"    
  },
  {
    id: 2,
    name: "On Soben",
    role: "DevOps Engineer",
    quote: "In God we trust. All others must bring data.",
    imageUrl: "/team/ben.png"
  },
  {
    id: 3,
    name: "Sol Vathanak",
    role: "DevOps Engineer",
    quote: "Automate everything that can be automated.",
    imageUrl: "/team/vathanak.jpg"
  },
  {
    id: 4,
    name: "Pov Sokny",
    role: "DevOps Engineer",
    quote: "Make it simple, but significant.",
    imageUrl: "/team/sokny.jpg"
  },
  {
    id: 5,
    name: "Mom Makara",
    role: "DevOps Engineer",
    quote: "Security is a process, not a product.",
    imageUrl: "/team/makara.jpg"
  }
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isAtTop, setIsAtTop] = useState(true)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Animate progress dots
  const progressDots = teamMembers.map((_, index) => {
    return useTransform(
      springProgress,
      [index / teamMembers.length, (index + 1) / teamMembers.length],
      [0, 1]
    )
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background relative" ref={containerRef}>
      {/* Scroll indicator */}
      {isAtTop && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.h1 
          className="text-4xl font-bold text-center mb-20 text-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Team
        </motion.h1>
        
        {/* Progress Line with dots */}
        <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-[3px] ml-[20%]">
          <motion.div
            className="h-full bg-primary/20 origin-top"
            style={{ scaleY: springProgress }}
          />
          
          {/* Progress dots */}
          {teamMembers.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 -left-2 bg-primary rounded-full"
              style={{
                top: `${(index / (teamMembers.length - 1)) * 100}%`,
                scale: progressDots[index]
              }}
            />
          ))}
        </div>

        {/* Team Members */}
        <div className="space-y-40">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative lg:ml-[30%] p-6 hover:shadow-lg transition-shadow duration-300 mr-10  ">
                {/* Connection to progress line (desktop only) */}
                <motion.div 
                  className="hidden lg:block absolute left-0 top-1/2 w-[calc(20%-2rem)] h-[3px] bg-primary/50 -translate-x-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                />
                
                {/* Member Avatar */}
                <div className=" absolute left-0 lg:-left-24 top-1/2 -translate-y-1/2  rounded-full border-8 border-purple-500 overflow-hidden transform -translate-x-1/2 bg-muted">
                  <motion.div 
                    className= "w-40 h-40 bg-muted rounded-full rounded-full object-cover  "
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                      <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={2000}
                      height={2000}
                      className="w-full h-full object-cover "
                    />
                  </motion.div> 
                </div>

                {/* Member Info */}
                <div className="ml-20 lgml-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    <h2 className="text-2xl font-semibold">{member.name}</h2>
                    <p className="text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-muted-foreground italic">&quot;{member.quote}&quot;</p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}