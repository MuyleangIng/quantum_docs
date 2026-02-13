import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { GlobalLoader } from "@/components/Loading";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import HeaderNav from "@/components/layout/HeaderNav";
import Head from "next/head";
import "katex/dist/katex.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={poppins.className}>          
            <ScrollProgressBar />
            <HeaderNav />
            <Component {...pageProps} />
            <Toaster />
            <GlobalLoader />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
