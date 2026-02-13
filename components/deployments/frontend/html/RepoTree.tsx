import { useState } from 'react'
import { RepoItem } from '@/types/github'
import { ChevronRight, ChevronDown, Folder, File } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface RepoTreeProps {
  items: RepoItem[];
  level?: number;
}

export function RepoTree({ items, level = 0 }: RepoTreeProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleItem = (name: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(name)) {
        newSet.delete(name)
      } else {
        newSet.add(name)
      }
      return newSet
    })
  }

  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.name} className="flex flex-col">
          <div 
            className={`flex items-center gap-2 ${level > 0 ? 'ml-4' : ''}`}
            style={{ paddingLeft: `${level * 16}px` }}
          >
            {item.type === 'directory' ? (
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-6 w-6"
                onClick={() => toggleItem(item.name)}
                aria-expanded={expandedItems.has(item.name)}
              >
                {expandedItems.has(item.name) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            ) : (
              <span className="w-6" />
            )}
            {item.type === 'directory' ? (
              <Folder className="h-4 w-4 text-blue-500" />
            ) : (
              <File className="h-4 w-4 text-gray-500" />
            )}
            <span className="text-sm">{item.name}</span>
          </div>
          {item.type === 'directory' && expandedItems.has(item.name) && item.children && (
            <RepoTree items={item.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  )
}

