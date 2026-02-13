import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share, Facebook, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Define the props type for ShareModal
interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentTitle?: string;
  shareUrl?: string; // New prop for custom share URL
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A modal for sharing content on social media or copying a link to clipboard.
 *
 * @param isOpen Whether the dialog is open or not.
 * @param onClose The callback to close the dialog.
 * @param contentTitle The title of the content to be shared. Defaults to "Share This Content".
 */
/******  a4141689-6785-42a0-ade7-a403887cf12d  *******/ const ShareModal: React.FC<
  ShareModalProps
> = ({
  isOpen,
  onClose,
  contentTitle = "Share This Content",
  shareUrl = "https://cloudinator.istad.co/", // Default to current URL if not provided
}) => {
  // Define the platform type
  type SharePlatform = "facebook" | "copy";

  const handleShare = async (platform: SharePlatform) => {
    try {
      if (platform === "facebook") {
        const encodedShareUrl = encodeURIComponent(shareUrl); // Use custom share URL
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`,
          "_blank",
        );
      } else if (platform === "copy") {
        await navigator.clipboard.writeText(shareUrl); // Use custom share URL
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
          duration: 2000,
          className: "bg-green-500 text-white border-none",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to share content. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-purple-500">
            <Share className="h-5 w-5" />
            {contentTitle}
          </DialogTitle>
          <DialogDescription>
            Choose how you'd like to share this content
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              variant="outline"
              className="w-[160px] h-[160px] flex items-center gap-2 border-purple-500 bg-purple-500 text-white hover:bg-purple-700 hover:text-white"
              onClick={() => handleShare("facebook")}
            >
              <Facebook className="h-4 w-4" />
              Share on Facebook
            </Button>
            <Button
              variant="outline"
              className="w-[160px] h-[160px] flex items-center gap-2 border border-purple-500 hover:bg-purple-200"
              onClick={() => handleShare("copy")}
            >
              <Link className="h-4 w-4" />
              Copy Link
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
