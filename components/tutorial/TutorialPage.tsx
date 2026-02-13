"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Play,
  Clock,
  BookOpen,
  Filter,
  Search,
  BookMarked,
  Star,
  MoreVertical,
  Share2,
} from "lucide-react";
import { VideoModal } from "./VideoModal";
import { useToast } from "@/hooks/use-toast";
import { EmptyState } from "./EmptyState";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  level: string;
  instructor: string;
  rating: number;
  progress: number;
  thumbnail: string;
  videoUrl: string;
  lastViewed?: number;
}

interface Category {
  id: string;
  name: string;
}

const TutorialPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState<Course[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedRecent = localStorage.getItem("recentlyViewed");
    if (storedRecent) {
      setRecentlyViewed(JSON.parse(storedRecent));
    }
  }, []);

  const addToRecentlyViewed = (course: Course) => {
    const now = new Date().getTime();
    const courseWithProgress = {
      ...course,
      progress: 100,
      lastViewed: now,
    };

    const updatedRecent = [
      courseWithProgress,
      ...recentlyViewed.filter((c) => c.id !== course.id),
    ].slice(0, 5);

    setRecentlyViewed(updatedRecent);
    localStorage.setItem("recentlyViewed", JSON.stringify(updatedRecent));
  };

  const formatLastViewed = (timestamp: number) => {
    const seconds = Math.floor((new Date().getTime() - timestamp) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  // Sample course data
  const courses: Course[] = [
    {
      id: 1,
      title: "How to deploy HTML website",
      description: "Learn the basics of deployment with cloudinator of HTML",
      duration: "2 mins",
      category: "frontend",
      level: "beginner",
      instructor: "Sarah Johnson",
      rating: 5.0,
      progress: 45,
      thumbnail:
        "https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/3HXWjxX-dyKecNxVJyGXcOACqBWEugXowOX274.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const categories: Category[] = [
    { id: "all", name: "All Videos" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "api", name: "API" },
    { id: "spring", name: "Spring Microservice" },
    { id: "ai", name: "Cloudinator AI" },
  ];

  const getLevelBadgeColor = (level: string): string => {
    const colors: { [key: string]: string } = {
      beginner: "bg-green-100 text-green-800",
      intermediate: "bg-blue-100 text-blue-800",
      advanced: "bg-purple-100 text-purple-800",
    };
    return colors[level] || "bg-gray-100 text-gray-800";
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Cloudinator Guide</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search tutorials..."
              className="pl-9 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <Tabs
        defaultValue="all"
        className="w-full"
        onValueChange={setSelectedCategory}
      >
        <ScrollArea className="w-full">
          <TabsList className="inline-flex w-full md:w-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
              >
                <span className="data-[state=active]:text-white">
                  {category.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        {/* Guide Grid */}
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
                  const viewed = recentlyViewed.find((v) => v.id === course.id);
                  const isViewed = !!viewed;
                  return (
                    <Card key={course.id} className="flex flex-col">
                      <CardHeader className="p-0">
                        <div className="relative">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded-t-xl"
                          />
                          {isViewed && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 grid place-content-center">
                              <Progress value={100} className="h-1" />
                              <p className="text-white text-xs mt-1">
                                Viewed{" "}
                                {viewed?.lastViewed &&
                                  formatLastViewed(viewed.lastViewed)}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getLevelBadgeColor(course.level)}>
                            {course.level}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-sm">{course.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="mb-4">
                          {course.description}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button
                          className="flex-1 mr-2"
                          onClick={() => {
                            addToRecentlyViewed(course);
                            toast({
                              title: "Coming Soon!",
                              description:
                                "This video content will be available soon.",
                            });
                          }}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Now
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <EmptyState
                message={`No tutorials found for ${category.name === "all" ? "any category" : category.name}. Check back later for new content!`}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Recently Viewed Section */}
      {recentlyViewed.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyViewed.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 grid place-content-center">
                      <Progress value={100} className="h-1" />
                      <p className="text-white text-xs mt-1">
                        Viewed{" "}
                        {course.lastViewed &&
                          formatLastViewed(course.lastViewed)}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-4">
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={currentVideoUrl}
      />
    </div>
  );
};

export default TutorialPage;
