import Image from 'next/image';
import {Card} from "@/components/ui/card";

function GettingStarted() {
    return (
        <div className="flex flex-col items-center space-y-8 py-8">
            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    AutomateX Git - Click on Submit Button
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
                <h1 className="text-center text-lg font-semibold px-4 pb-4">
                    AutomateX Git - Click on resource, follow our git commands and get your code into our platform
                </h1>
            </Card>

            <Card className="border rounded-lg overflow-hidden shadow-xl w-96">
                <div className="p-4">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="w-full h-auto"
                    />
                </div>
            </Card>
        </div>
    );
}

export default function MyApp() {
    return <GettingStarted />;
}