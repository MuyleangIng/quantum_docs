import Image from 'next/image'
import Link from 'next/link'

export default function ViteDeployGuide() {
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
            <span className="text-purple-500 dark:text-purple-400">Cloudinator</span>
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
      title: "Create a deploy Vite website",
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
          alt="Create a new Vite Website"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Choose Git Provider",
      description: "Choose the Git repository that contains your Vite files. You have the option to choose GitHub or GitLab",
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
      title: "Configure Deployment Settings",
      description: (
        <div>
          <h1>Set the following settings for your Vite:</h1>
          <ul className="list-disc ml-6">
            <li>Project name</li>
            <li>Git URL</li>
            <li>Subdomain name</li>
            <li>Webhook for continuous deployment (optional)</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 my-4" role="alert">
            <p className="font-bold text-orange-500 dark:text-orange-400">Important!</p>
            <h1>
              Cloudinator will deploy your Vite files
              <ul className="list-none ml-6 space-y-1">
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-gray-500 dark:bg-gray-700 rounded-full">
                    <svg className="h-2 w-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="ml-3">using branch <span className="font-bold">main</span></span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-gray-500 dark:bg-gray-700 rounded-full">
                    <svg className="h-2 w-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <span className="ml-3">Make sure in your Vite project file setup <span className="font-bold">standalone</span> in config file</span>
                </li>
              </ul>
            </h1>
          </div>
        </div>
      ),
      image: (
        <Image
          src="/html-guide/configure.png"
          alt="Configure deployment settings"
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
      title: "Access your deployed Vite website",
      description: "Once deployment is complete, Cloudinator will provide you with a URL to access your live site.",
      image: (
        <Image
          src="/placeholder.svg"
          alt="Access your deployed Vite site"
          height={200}
          width={350}
        />
      ),
    }
  ]

  return (
    <div className="w-full bg-purple-50 dark:bg-gray-800 p-8">
      <h1 className="text-purple-700 dark:text-purple-300 text-4xl font-bold mb-8 text-center">
        How to Deploy Vite on Cloudinator
      </h1>
      <div className="max-w-3xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            {step.image}
            <div className="p-6">
              <h2 className="text-purple-600 dark:text-purple-300 text-2xl font-semibold mb-2">
                Step {index + 1}: {step.title}
              </h2>
              <div className="text-gray-700 dark:text-gray-300">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="https://cloudinator-ui.cloudinator.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 dark:bg-purple-300 text-white dark:text-purple-800 px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors"
        >
          Get Started with Cloudinator
        </Link>
      </div>
    </div>

  )
}

