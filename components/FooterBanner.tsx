import { useState } from "react";
import { Cloud, Info, Share2 } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import ShareModal from "./ShareModal";
import Image from "next/image";

export default function FooterBanner() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleFeedback = (type: string) => {
    if (type === "shared") {
      setIsShareOpen(true); // Open the share modal when feedback type is shared
    }
  };

  const features = [
    {
      icon: <Share2 className="w-5 h-5" />,
      label: "Share",
      action: () => handleFeedback("shared"),
      color: "text-purple-500",
    },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            {/* <Cloud className="h-6 w-6 text-purple-500" /> */}
            <Image
              src="/images/cloudinator.png"
              alt="Cloudinator Logo"
              width={60}
              height={60}
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-lg font-medium text-purple-500 flex items-center gap-2 cursor-pointer">
                    Powered by Cloudinator
                    <Info className="h-4 w-4" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Learn more about Cloudinator</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex space-x-3">
            {features.map((feature, index) => (
              <Button
                key={index}
                onClick={feature.action}
                variant="outline"
                className={`flex items-center px-4 py-2 ${feature.color} space-x-2`}
                aria-label={feature.label}
              >
                {feature.icon}
                <span className="hidden sm:inline">{feature.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600 dark:text-gray-300">
          {[
            { title: "Quick Links", links: ["Documentation", "Support"] },
            { title: "Resources", links: ["Blog", "Tutorials"] },
            { title: "Connect", links: ["Facebook", "GitHub"] },
            { title: "Community", links: ["Email", "GitHub"] },
          ].map((section, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <h4 className="font-semibold text-purple-500">{section.title}</h4>
              {section.links.map((link, i) => (
                <a key={i} href="#" className="hover:text-purple-500 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Share Modal */}
        <ShareModal 
          isOpen={isShareOpen} 
          onClose={() => setIsShareOpen(false)} 
          contentTitle="Cloudinator"
          shareUrl="https://cloudinator.istad.co/"
        />
      </div>
    </motion.div>
  );
}
