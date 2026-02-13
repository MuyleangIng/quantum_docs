import React from 'react'
import {Button} from "@/components/ui/button";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function SubmitButton({ children, ...props }: SubmitButtonProps) {
    return (
        <Button
            type="submit"
            className="inline-flex w-full py-4 justify-center px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            {...props}
        >
            {children}
        </Button>
    )
}

