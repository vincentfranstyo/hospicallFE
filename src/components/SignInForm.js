'use client'
import React, {useState} from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'
import {useRouter} from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const url = 'https://hospicall.azurewebsites.net/token'

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
            })

            if (res.ok) {
                console.log(res.message)
                alert('Login successful')
                router.push('https://hospicall.azurewebsites.net/docs')
            } else {
                alert('Login failed. Please try again')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={onSubmit} className={"space-y-5 w-[400px] mb-5"}>
            <div className={"grid w-full max-w-sm items-center gap-1.5"}>
                <Label htmlFor={'username'}>Username</Label>
                <Input
                    id={"username"}
                    type={"text"}
                    className={"rounded placeholder:text-gray-400"}
                    placeholder={"bertpad"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className={"grid w-full max-w-sm items-center gap-1.5"}>
                <Label htmlFor={'password'}>Password</Label>
                <Input
                    id={"password"}
                    type={"password"}
                    className={'rounded placeholder:text-gray-400'}
                    placeholder={"password at least 8" +
                        " letters long"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <Button className={"bg-indigo-900 text-white justify-center items-center w-full hover:bg-indigo-200" +
                " hover:text-black rounded"} size={'lg'}>Sign In</Button>
        </form>
    )
}

export default RegisterForm