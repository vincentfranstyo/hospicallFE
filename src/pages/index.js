import {Button} from '@/components/ui/button'
import {IoDocumentTextOutline} from "react-icons/io5";
import {useRouter} from 'next/navigation'
import {FaPhoneFlip} from "react-icons/fa6";
import Head from 'next/head'

export default function Home() {
    const url = 'https://hospicall.azurewebsites.net/emergency/'
    const router = useRouter()

    const getRandomPosition = () => {
        return (Math.random() * 20 - 10).toFixed(3)
    }

    let randomLongitude = getRandomPosition()
    let randomLatitude = getRandomPosition()
    const onclickhandler = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${url}?longitude=${randomLongitude}&latitude=${randomLatitude}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            })

            if (res.ok) {
                const responseBody = await res.json();
                alert(`${responseBody[0].message}. Help is here anytime soon! Please rest assured!`)
            } else {
                alert(`Sorry! Your call can't be made. Please reattempt!`)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const docsClick = (e) => {
        e.preventDefault()
        router.push('/signin/page')
    }
    return (
        <>
            <Head>
                <title>Hospicall+</title>
                <meta property="og:title" content="Hospicall+" key="Hospicall+"/>
            </Head>
            <main
                className={`bg-gradient-to-br from-indigo-500 to-gray-900 flex min-h-screen flex-col items-center p-20 gap-5`}
            >
                <div className={"w-full justify-center text-center items-center"}>
                    <h1 className={"font-bold text-[48px] text-white"}>Hospicall+</h1>
                    <p className={"text-[18px] font-semibold text-white"}>an integrated healthcare call and mental wellness service
                    </p>
                </div>
                <div className={"h-auto flex flex-col items-center gap-10 justify-center"}>
                    <Button variant={"primary"}
                            className={"shadow-lg hover:shadow-2xl hover:bg-indigo-100 rounded-full" +
                                " bg-indigo-500 hover:underline hover:text-black text-white p-20 gap-5 grid justify-center" +
                                " items-center" +
                                " h-auto"}
                            onClick={onclickhandler}>
                        <FaPhoneFlip size={80} className={"mx-auto"}/>
                        <p className={"font-bold text-[24px] text-center"}>Make Call</p>
                    </Button>
                    <Button variant={"primary"} className={"gap-5 border hover:bg-indigo-100 rounded-xl" +
                        " bg-indigo-500 hover:underline hover:text-black text-white p-7 shadow-lg" +
                        " border-gray-500 mx-auto"} onClick={docsClick}>
                        <IoDocumentTextOutline size={20}/>
                        <p className={"font-bold text-[20px]"}>Go To Docs</p>
                    </Button>
                </div>
            </main>
        </>
    )
}
