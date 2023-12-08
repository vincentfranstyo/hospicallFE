import RegisterForm from "@/components/RegisterForm";
import Link from 'next/link'

export default function RegisterPage() {
    return (
        <>
            <div className={"h-screen w-screen flex justify-center items-center bg-slate-100"}>
                <div className={"shadow-xl p-4 bg-white rounded-xl"}>
                    <h1 className={"font-semibold text-2xl py-5 text-black"}>Create your account</h1>
                    <RegisterForm />
                    <p className={"text-center"}>Have an account? <Link href={"/signin/page"} className={"text-indigo-500 hover:underline"}>Sign in</Link></p>
                </div>
            </div>
        </>
    )
}