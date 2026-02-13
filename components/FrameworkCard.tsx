
import Link from 'next/link'
import Image from 'next/image'

interface FrameworkCardProps {
    name: string
    icon: string
    href: string
}

export function FrameworkCard({ name, icon, href }: FrameworkCardProps) {
    return (
        <Link
            href={href}
            className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 hover:border-gray-100 hover:bg-gray-100 hover:text-black transition-colors"
        >
            <div className="w-12 h-12 mb-4 ">
                <Image
                    src={icon}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                />
            </div>
            <span className="text-sm font-medium">{name}</span>
        </Link>
    )
}

