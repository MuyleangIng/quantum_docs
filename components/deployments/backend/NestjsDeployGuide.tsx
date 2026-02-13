import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { TimerLaunch } from './nestjs/TimerLaunch'

export default function NestjsJSDeployGuide() {
    const launchDate = new Date('2024-12-23T09:00:00Z'); // Set this to your desired launch date
    const [currentDate, setCurrentDate] = useState(new Date());
    const isFeatureLaunched = currentDate >= launchDate;

    const steps = [
        {
            title: "Sign up for a Cloudinator account",
            description: (
            <p>
              Visit{" "}
              <Link
                href="https://cloudinator-ui.cloudinator.cloud/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-purple-500">Cloudinator</span>
              </Link>{" "}
              and create a new account or sign in if you already have one.
            </p>
          ),
          image: (
            <Image
              src="/html-guide/login.jpg"
              alt="Login User Interface"
              height={1000}
              width={1000}
            />
          ),
        },
        {
          title: "Create a new Nestjs Project",
          description: (
            <div>
                From your Cloudinator dashboard, click on '<span className="font-bold dark:font-semibold">Create Project</span>' and select '<span className="font-bold dark:font-semibold">Frontend</span>' in project type.
                <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 my-4" role="alert">
                    <p className="font-bold text-orange-500 dark:text-orange-400">Notice!</p>
                    <p>
                    Make sure you have a workspace containing your project's site. If you don't have one, you can
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-purple-500 dark:text-purple-400"> create one now</span>
                    </Link>
                    </p>
                </div>
            </div>
          ),
          image: (
            <Image
              src="/html-guide/create-project.png"
              alt="Create a new HTML Static Site"
              height={1000}
              width={1000}
            />
          ),
        },
        {
          title: "Choose Git Provider",
          description: "Choose the Git repository that contains your Nuxt JS Project. You have option for choose GitHub or GitLab",
          image: (
            <Image
              src="/html-guide/git-provider.png"
              alt="Choose Git Provider"
              height={1000}
              width={1000}
            />
          ),
        },
        {
          title: "Configure deployment settings",
          description: (
            <div>
                Set the following settings for your Nest.js site:
                <ul className="list-disc ml-6">
                    <li>Project name</li>
                    <li>Git URL</li>
                    <li>Subdomain name</li>
                    <li>Webhook for continuous deployment</li>
                </ul>
                <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 my-4" role="alert">
                    <p className="font-bold text-orange-500 dark:text-orange-400">Important!</p>
                    <p>
                    Cloudinator will deploy your Nest.js files using the branch <span className="font-semibold dark:font-bold">main</span>
                    </p>
                </div>
            </div>
          ),
          image: (
            <Image
              src="/html-guide/configure.png"
              alt="Configure build settings"
              height={1000}
              width={1000}
            />
          ),
        },
        {
          title: "Deploy your site",
          description: "Click 'Create Frontend Project' to start the deployment process. Cloudinator will automatically build and deploy your site.",
          image: (
            <Image
              src="/placeholder.svg"
              alt="Deploy your site"
              height={200}
              width={350}
            />
          ),
        },
        {
          title: "Access your deployed Nestjs site",
          description: "Once deployment is complete, Cloudinator will provide you with a URL to access your live site.",
          image: (
            <Image
              src="/placeholder.svg"
              alt="Access your deployed Nestjs site"
              height={200}
              width={350}
            />
          ),
        }
    ]
    
    const handleDateUpdate = () => {
      setCurrentDate(new Date());
    };

    return (
        <div className="w-full bg-purple-50 p-8">
            <h1 className="text-purple-700 text-4xl font-bold mb-8 text-center">
                How to Deploy Nest.js on Cloudinator
            </h1>
            
            {isFeatureLaunched ? (
                <>
                    <div className="max-w-3xl mx-auto space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                {step.image}
                                <div className="p-6">
                                    <h2 className="text-purple-600 text-2xl font-semibold mb-2">
                                        Step {index + 1}: {step.title}
                                    </h2>
                                    <div className="text-gray-700">{step.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            href="https://cloudinator-ui.cloudinator.cloud/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors"
                        >
                            Get Started with Cloudinator
                        </Link>
                    </div>
                </>
            ) : (
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-purple-600 text-xl">
                        The deployment guide will be available once the countdown is complete.
                    </p>
                    <p className="text-purple-500 mt-4">
                        Stay tuned for our exciting new contents!
                    </p>
                </div>
            )}
        </div>
    )
}

