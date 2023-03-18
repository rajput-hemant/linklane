import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Cobe from "@/components/cobe";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

const Home = () => {
  const { status } = useSession();

  if (status == "loading") {
    return <Loader />;
  } else {
    return (
      <>
        <Head>
          <title>linklane</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Cobe />
        <section className="container py-10 md:py-10">
          <div className="my-24 flex flex-col items-center justify-center gap-2 ">
            <h1 className="h-[120px] bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-2xl font-extrabold leading-tight tracking-tighter text-transparent sm:text-3xl md:text-4xl lg:text-8xl">
              Building Professional Bridges
            </h1>
            <p className="bg-transparent px-32 pt-8 text-center text-slate-700 dark:text-slate-400 sm:text-xl md:text-3xl">
              Your success matters to us. The linklane has a wealth of resources
              <br />
              and career tools to aid you in preparing yourself, building
              <br /> your network, and ultimately finding a job.
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            {status == "authenticated" && (
              <Button className="h-16 w-64 rounded-full text-xl font-bold">
                <Link href="/dashboard">Go to Dashboard</Link>
                <ArrowRight />
              </Button>
            )}
          </div>
        </section>
      </>
    );
  }
};

export default Home;
