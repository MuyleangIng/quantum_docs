import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AnimationLoading from "@/components/AnimationLoading";

// Loading Context
interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType>({
    isLoading: false,
    setIsLoading: () => {},
});

// Loading Provider Component
export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => setIsLoading(true);
        const handleRouteChangeComplete = () => setIsLoading(false);
        const handleRouteChangeError = () => setIsLoading(false);

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeError);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, [router]);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

// Global Loading Component
export const GlobalLoader: React.FC = () => {
    const { isLoading } = useContext(LoadingContext);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="text-center">
                <AnimationLoading />
                {/*{process.env.NODE_ENV === 'development' && (*/}
                {/*    <p className="text-sm text-gray-500 mt-2">*/}
                {/*        Dev Mode: Route Transition*/}
                {/*    </p>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

// Custom hook for loading state
export const useLoading = () => {
    return useContext(LoadingContext);
};

// Example of how to use the loading state in a page
export const ExamplePageWithLoading: React.FC = () => {
    const { isLoading, setIsLoading } = useLoading();

    // Optional: Manually control loading state if needed
    const simulateAsyncAction = async () => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Perform some async action
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {/* Your page content */}
            {isLoading && <p>Additional loading state indicator</p>}
        </div>
    );
};