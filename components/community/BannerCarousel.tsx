'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCarousel } from '@/hooks/useCarousel'

interface BannerItem {
  id: number
  title: string
  description: string
  imageUrl: string
}

const bannerItems: BannerItem[] = [
  {
    id: 1,
    title: 'Welcome to Our Community',
    description: 'Join us in building a better future together.',
    imageUrl: 'https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/community/photo-1519389950473-47ba0277781c-WTBldAtlGXbcM42cKtVxNQdxF4JUup.avif',
  },
  {
    id: 2,
    title: 'Upcoming Events',
    description: 'Check out our exciting lineup of community events.',
    imageUrl: 'https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/community/22234-h8dfVji1cLkEZYYU9No2ZO8iXT7xn1.avif',
  },
  {
    id: 3,
    title: 'Get Involved',
    description: 'Discover ways to contribute and make a difference.',
    imageUrl: 'https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/community/wetwetgrseg-1qbFI0EkNnVB7cNFbFdil7Lp8y4KHJ.avif',
  },
]

export default function BannerCarousel() {
  const { currentIndex, next, previous, goTo } = useCarousel(bannerItems.length)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent SSR issues with window object
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerItems.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <div className="relative h-[400px]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
                <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                <p className="text-xl">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75"
        onClick={previous}
      >
        <ChevronLeft className="h-4 w-4 text-white" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4 text-white" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerItems.map((_, index) => (
          <Button
            key={index}
            size="sm"
            className={`w-3 h-3 rounded-full p-0 ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => goTo(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

