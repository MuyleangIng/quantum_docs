import React from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string
    name: string
    type?: string
    textarea?: boolean
}

export function FormInput({ label, name, type = 'text', textarea = false, ...props }: FormInputProps) {
    const InputComponent = textarea ? 'textarea' : 'input'

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500">*</span> {label}
            </label>
            <InputComponent
                id={name}
                name={name}
                type={type}
                className="mt-1 block w-full border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-2 rounded-xl"
                {...props}
            />
        </div>
    )
}

