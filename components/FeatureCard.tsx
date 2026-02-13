import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type LucideIcon } from "lucide-react";
import { useEffect } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        hover: {
          scale: 1.05,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        }
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col items-center rounded-lg border dark:text-white bg-card p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground bg-white dark:bg-gray-500 hover:bg-gray-100 dark:border-none hover:cursor-pointer"
    >
      <motion.div 
        className="rounded-full bg-primary/10 p-4"
        variants={{
          hover: {
            scale: 1.15,
            rotate: 5,
            transition: {
              duration: 0.2,
              ease: "easeInOut"
            }
          }
        }}
      >
        <motion.div
          variants={{
            hover: {
              rotate: -5,
              transition: {
                duration: 0.2,
                ease: "easeInOut"
              }
            }
          }}
        >
          <Icon className="h-8 w-8 text-primary" />
        </motion.div>
      </motion.div>
      <motion.h3 
        className="mt-4 text-center font-semibold"
        variants={{
          hover: {
            y: -2,
            transition: {
              duration: 0.2,
              ease: "easeInOut"
            }
          }
        }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="mt-2 text-center text-sm text-muted-foreground"
        variants={{
          hover: {
            y: -2,
            transition: {
              duration: 0.2,
              ease: "easeInOut"
            }
          }
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}