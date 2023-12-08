import SignInForm from "@/components/SignInForm";
import Link from 'next/link'
import Head from "next/head";

export default function SignInPage() {
    return (
        <>
            <Head>
                <title>Hospicall+</title>
                <meta property="og:title" content="Hospicall+" key="Hospicall+"/>
            </Head>
            <div className={"h-screen w-screen flex justify-center items-center bg-slate-100"}>
                <div className={"shadow-xl p-4 bg-white rounded-xl"}>
                    <h1 className={"font-semibold text-2xl py-5 text-black"}>Sign in to your account</h1>
                    <SignInForm />
                    <p className={"text-center"}>Don&#39;t have an account yet? <Link href={"/register/page"} className={"text-indigo-500 hover:underline"}>Register</Link></p>
                </div>
            </div>
        </>
    )
}