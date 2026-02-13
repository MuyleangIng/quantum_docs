'use client'

import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Github, Copy, Check, Folder, File, ExternalLink } from 'lucide-react'
import { GitHubLinkProps, RepoItem } from '@/types/github'
import { RepoTree } from '../../frontend/html/RepoTree'
import { useToast } from '@/hooks/use-toast'

const nestjsRepoStructure: RepoItem[] = [
  {
    name: 'app', type: 'directory', children: [
      { name: 'favicon.ico', type: 'file' },
      { name: 'global.css', type: 'file' },
      { name: 'layout.tsx', type: 'file' },
      { name: 'page.tsx', type: 'file' },
    ]
  },
  {
    name: 'public', type: 'directory', children: [
      { name: 'file.svg', type: 'file' },
      { name: 'globe.svg', type: 'file' },
      { name: 'next.svg', type: 'file' },
      { name: 'vercel.svg', type: 'file' },
      { name: 'window.svg', type: 'file' },
    ]
  },
  { name: 'eslint.config.ts', type: 'file' },
  { name: 'package.json', type: 'file' },
  { name: 'package-lock.json', type: 'file' },
  { name: 'postcss.config.mjs', type: 'file' },
  { name: 'README.md', type: 'file' },
  { name: 'tailwind.config.ts', type: 'file' },
  { name: 'tsconfig.json', type: 'file' },

]

export default function NextjsGitHubLink({ repoUrl, repoName }: GitHubLinkProps) {
  const [copied, setCopied] = useState(false)

  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(repoUrl);
      setCopied(true);
      toast({
        title: "Success",
        description: "Copied to clipboard",
        variant: "success",
        duration: 2000,
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      toast({
        title: "Error",
        description: "Failed to copy",
        variant: "error", 
        duration: 2000,
      }); 
    }
  };

  
  const redirectToGitHub = () => {
    window.open(repoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="h-6 w-6" />
          {repoName}
        </CardTitle>
        <CardDescription>View and copy the repository link</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <Input value={repoUrl} readOnly className="flex-grow" />
          <div className="flex space-x-2">
            <Button onClick={copyToClipboard} className="border-purple-300 border">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button onClick={redirectToGitHub} variant="default" className="border border-purple-300 whitespace-nowrap">
              <ExternalLink className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Repository Structure</h3>
          <div className="border rounded-md p-4 bg-gray-50 dark:bg-gray-900">
            <RepoTree items={nestjsRepoStructure} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

