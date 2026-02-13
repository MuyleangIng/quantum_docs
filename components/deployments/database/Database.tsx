import Image from 'next/image';

function Database() {
    return (
        <>
            <div className="text-lg font-bold mb-4">1. Choose the database:</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">2. Enter the required information</div>
            <div className="flex justify-center mb-8">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
            <div className="text-lg font-bold mb-4">3. Copy the important information to connect to your database</div>
            <div className="flex justify-center">
                <div className="max-w-md shadow-lg">
                    <Image
                        width={800}
                        height={500}
                        src="/images/cloudinator-logo.jpg"
                        alt="Cloudinator Logo"
                        unoptimized={true}
                        className="rounded"
                    />
                </div>
            </div>
        </>
    );
}

export default function MyApp() {
    return <Database />;
}