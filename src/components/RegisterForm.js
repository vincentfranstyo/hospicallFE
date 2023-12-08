'use client'
import React, {useState} from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'
import {useRouter} from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const url = 'https://hospicall.azurewebsites.net/register'

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        username: username,
                        password: password,
                        phone_number: phone
                    }
                )
            })

            if (res.ok && email && firstName && lastName) {
                alert('Registration successful')
                console.log(res.message)
                router.push('/signin/page')
            } else {
                alert('Failed registration. Please try again')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={onSubmit} className={"space-y-5 w-[400px] mb-5"}>
            <div className={"grid w-full max-w-sm items-center gap-1.5"}>
                <Label htmlFor={'firstname'}>First Name</Label>
                <Input
                    id={"firstname"}
                    type={"text"}
                    className={"rounded placeholder:text-gray-400"}
                    placeholder={"Robert"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div className={"grid w-full max-w-sm items-center gap-1.5"}>
                <Label htmlFor={'lastname'}>Last Name</Label>
                <Input
                    id={"lastname"}
                    type={"text"}
                    className={"rounded placeholder:text-gray-400"}
                    placeholder={"Paddington"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className={"grid w-full max-w-sm items-center gap-1.5"}>
                <Label htmlFor={'email'}>Email</Label>
                <Input
                    id={"email"}
                    type={"email"}
                    className={"rounded placeholder:text-gray-400"}
                    placeholder={"robertpadd@gmail.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
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
            <div className={"grid w-full max-w-sm items-center gap-1.5"}>
                <Label htmlFor={'phonenumber'}>Phone Number</Label>
                <Input
                    id={"phonenumber"}
                    type={"text"}
                    className={'rounded placeholder:text-gray-400'}
                    placeholder={"+6285367564567"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            <Button className={"bg-indigo-900 text-white justify-center items-center w-full hover:bg-indigo-200" +
                " hover:text-black rounded"} size={'lg'}>Register</Button>
        </form>
    )
}

export default RegisterForm