"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";

const steps = [
  {
    title: " Step 1: Code Analysis",
    commands: [
      "# Running SonarQube analysis for code quality",
      "sonar-scanner \\",
      "  -Dsonar.projectKey=my-app \\",
      "  -Dsonar.sources=. \\",
      "  -Dsonar.host.url=http://localhost:9000 \\",
      "  -Dsonar.login=your-token",
      "",
      "# Checking test coverage",
      "npm run test:coverage"
    ]
  },
  {
    title: " Step 2: Build the Docker image",
    commands: [
      "# Building optimized production image",
      "docker build --no-cache -t my-app:latest . \\",
      "  --build-arg NODE_ENV=production \\",
      "  --build-arg VERSION=$(git describe --tags)",
      "",
      "# Tagging image for registry",
      "docker tag my-app:latest registry.example.com/my-app:latest"
    ]
  },
  {
    title: " Step 3: Run Security Scans",
    commands: [
      "# Scanning image for vulnerabilities",
      "trivy image my-app:latest --severity HIGH,CRITICAL",
      "",
      "# Running OWASP dependency check",
      "npm audit",
      "",
      "# Checking for secrets in code",
      "gitleaks detect --source=."
    ]
  },
  {
    title: " Step 4: Deploy to Kubernetes",
    commands: [
      "# Applying kubernetes configurations",
      "kubectl apply -f k8s/namespace.yaml",
      "kubectl apply -f k8s/configmap.yaml",
      "kubectl apply -f k8s/secrets.yaml",
      "kubectl apply -f k8s/deployment.yaml",
      "kubectl apply -f k8s/service.yaml",
      "",
      "# Verifying deployment",
      "kubectl get pods -n my-app",
      "kubectl get services -n my-app"
    ]
  },
  {
    title: " Step 5: Monitor and Log",
    commands: [
      "# Checking application logs",
      "kubectl logs -f deployment/my-app -n my-app",
      "",
      "# Monitoring pod health",
      "kubectl describe pod $(kubectl get pod -l app=my-app -o jsonpath='{.items[0].metadata.name}') -n my-app",
      "",
      "# Checking metrics",
      "kubectl top pod -n my-app"
    ]
  },
  {
    title: " Step 6: Continuous Integration",
    commands: [
      "# Pushing code to repository",
      "git add .",
      "git commit -m 'feat: new feature implementation'",
      "git push origin main",
      "",
      "# CI pipeline steps:",
      "- Running unit tests",
      "- Building application",
      "- Running integration tests",
      "- Code quality analysis"
    ]
  },
  {
    title: " Step 7: Continuous Deployment",
    commands: [
      "# CD pipeline steps:",
      "- Deploying to staging environment",
      "- Running smoke tests",
      "- Verifying metrics and logs",
      "- Deploying to production",
      "",
      "# Monitoring deployment status",
      "kubectl rollout status deployment/my-app -n my-app",
      "",
      "# Verifying application health",
      "curl -f https://app.example.com/health"
    ]
  }
];

export function CodePreview() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const startTypingAnimation = useCallback((step: { title: string; commands: string[] }) => {
    if (!step || isTyping) return;

    setIsTyping(true);
    const text = [step.title, "", ...step.commands].join("\n");
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
            setDisplayedText("");
          } else {
            // Reset to first step after a longer pause
            setTimeout(() => {
              setCurrentStep(0);
              setDisplayedText("");
            }, 2000);
          }
        }, 1500);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentStep, isTyping]);

  useEffect(() => {
    if (!isTyping && currentStep < steps.length) {
      startTypingAnimation(steps[currentStep]);
    }
  }, [currentStep, startTypingAnimation, isTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative overflow-hidden rounded-lg border bg-gray-900 p-4 text-white shadow-md"
    >
      <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 text-sm text-gray-400">Terminal</span>
      </div>
      <div className="relative h-96 bg-gray-900">
        <pre className="absolute inset-0 p-4 overflow-x-auto">
          <code className="text-sm font-mono text-gray-300">{displayedText}</code>
        </pre>
      </div>
    </motion.div>
  );
}