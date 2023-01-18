import React from "react";
import { useRouter } from "next/router";
import { ErrorLayout } from "../layouts";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <div className="w-full h-[calc(100vh-128px)] flex flex-col items-center justify-center">
        <p className="font-bold text-3xl mb-2 text-slate-700 dark:text-slate-400">
          404 Not Found Error!
        </p>
        <button
          className="mt-5 px-4 py-3 border border-cyan-500 rounded-md text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

NotFound.Layout = ErrorLayout;
export default NotFound;
