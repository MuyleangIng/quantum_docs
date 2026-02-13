import Image from "next/image";
import Link from "next/link";

export default function HTMLDeployGuide() {
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
            <span className="text-purple-500 dark:text-purple-400">
              Cloudinator
            </span>
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
      title: "Create a new HTML Static Site",
      description: (
        <div>
          From your Cloudinator dashboard, click on '
          <span className="font-bold dark:font-semibold">Create Project</span>'
          and select '
          <span className="font-bold dark:font-semibold">Frontend</span>' in
          project type.
          {/* <div
            className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 my-4"
            role="alert"
          >
            <p className="font-bold text-orange-500 dark:text-orange-400">
              Notice!
            </p>
            <p>
              Make sure you have a workspace containing your project's site. If
              you don't have one, you can
              <Link
                href="/spring-microservice/workspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-purple-500 dark:text-purple-400">
                  {" "}
                  create one now
                </span>
              </Link>
            </p>
          </div> */}
        </div>
      ),
      image: (
        <Image
          src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/cloudinator/Screenshot%202025-01-09%20083449-18vtVytC62tR1b9LAnHaw2qq0VWJWo.jpg"
          alt="Create a new HTML Static Site"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Choose Git Provider",
      description:
        "Choose the Git repository that contains your HTML files. You have the option to choose GitHub or GitLab",
      image: (
        <Image
          src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/cloudinator/git-provider-vn1DaZme5cpdVcBFygLlmcZSSIUTce.jpg"
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
          Set the following settings for your HTML static site:
          <ul className="list-disc ml-6">
            <li>Project name</li>
            <li>Git URL</li>
            <li>Subdomain name</li>
            <li>Webhook for continuous deployment (optional)</li>
          </ul>
          <div
            className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 my-4"
            role="alert"
          >
            <p className="font-bold text-orange-500 dark:text-orange-400">
              Important!
            </p>
            <p>
              Cloudinator will deploy your HTML files using the branch{" "}
              <span className="font-semibold dark:font-bold">main</span>
            </p>
            <p>Make sure project structure has <span className="font-semibold dark:font-bold">index.html</span> file in root directory</p>
          </div>
        </div>
      ),
      image: (
        <Image
          src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/cloudinator/configure-project-7weorJYCLwLj5qghw4bt5LHMte3yaM.jpg"
          alt="Configure deployment settings"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Deploy your site",
      description:
        "Click 'Create Frontend Project' to start the deployment process. Cloudinator will automatically build and deploy your site.",
      image: (
        <Image
          src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/cloudinator/project-deploy-duR1paKAdgd8TIMmkIKSJfYPlNjtAZ.jpg"
          alt="Deploy your site"
          height={1000}
          width={1000}
        />
      ),
    },
    {
      title: "Access your deployed HTML site",
      description:
        "Once deployment is complete, Cloudinator will provide you with a URL to access your live site.",
      image: (
        <Image
          src="https://7zg3rv0nfdklwx5q.public.blob.vercel-storage.com/cloudinator/success-deploy-gouaDE1fRq13zpo2HLB7SVRg7kjNj1.jpg"
          alt="Access your deployed HTML site"
          height={1000}
          width={1000}
        />
      ),
    },
  ];

  return (
    <div className="w-full bg-purple-50 dark:bg-gray-800 p-8">
      <h1 className="text-purple-700 dark:text-purple-300 text-4xl font-bold mb-8 text-center">
        How to Deploy HTML on Cloudinator
      </h1>
      <div className="max-w-3xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
          >
            {step.image}
            <div className="p-6">
              <h2 className="text-purple-600 dark:text-purple-300 text-2xl font-semibold mb-2">
                Step {index + 1}: {step.title}
              </h2>
              <div className="text-gray-700 dark:text-gray-300">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="https://cloudinator.istad.co"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 dark:bg-purple-300 text-white dark:text-purple-800 px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-400 transition-colors"
        >
          Get Started with Cloudinator
        </Link>
      </div>
    </div>
  );
}
