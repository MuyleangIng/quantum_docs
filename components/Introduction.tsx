import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

function Introduction() {

    return (
        <div className="flex flex-col items-center space-y-8">
            <Card className="w-full max-w-sm p-4 m-2">
                <h1 className="text-lg mb-2">Deploy Frontend</h1>
                <div className="flex justify-center mb-4">
                    <Link href={'/deployment/frontend'}>
                        <Image
                            width={800}
                            height={500}
                            src="/images/cloudinator-logo.jpg"
                            alt=""
                            unoptimized={true}
                        />
                    </Link>
                </div>
                <Button className="w-full bg-purple-500">
                    More Info
                </Button>
            </Card>

            <Card className="w-full max-w-sm p-4 m-2">
                <h1 className="text-lg mb-2">Deploy Backend</h1>
                <div className="flex justify-center mb-4">
                    <Link href={'/deployment/backend'}>
                        <Image
                            width={800}
                            height={500}
                            src="/images/cloudinator-logo.jpg"
                            alt=""
                            unoptimized={true}
                        />
                    </Link>
                </div>
                <Button className="w-full bg-purple-500">
                    More Info
                </Button>
            </Card>

            <Card className="w-full max-w-sm p-4 m-2">
                <h1 className="text-lg mb-2">Deploy Database</h1>
                <div className="flex justify-center mb-4">
                    <Link href={'/deployment/database'}>
                        <Image
                            width={800}
                            height={500}
                            src="/images/cloudinator-logo.jpg"
                            alt=""
                            unoptimized={true}
                        />
                    </Link>
                </div>
                <Button className="w-full bg-purple-500">
                    More Info
                </Button>
            </Card>
        </div>
    );
}

export default function MyApp() {
    return <Introduction />;
}