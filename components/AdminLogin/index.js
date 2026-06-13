'use client';

import React from 'react';
import Input from '../common/Input';
import { useRouter } from 'next/navigation';
import cookieCutter from "cookie-cutter";
import Spinner from '../common/Spinner';
import { changeMaxAge } from '@/src/utils/login';
import Link from 'next/link';

function AdminLogin() {
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        if(cookieCutter.get('atkn')){
            router.push('/adminpanel');
        }
    }, [])

    return (
        <div className='w-full h-screen flex items-center justify-center bg-[url("/bg/bglightani.svg")] bg-no-repeat bg-cover relative'>
            <div className='absolute top-6 left-6 z-50'>
                <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-jnu-blue transition-colors group bg-white/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-gray-200/50 shadow-sm">
                    <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span> Back to Home
                </Link>
            </div>
            {loading && <Spinner color="#1B2D56" loading={loading}/>}
            <div className='bg-transparent/10 p-4 flex flex-col justify-center items-center gap-3'>
                <Input type="text" placeholder="Username" className="border-[0.3px] border-black shadow-lg outline-primarycolor text-black" onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" className="border-[0.3px] border-black shadow-lg outline-primarycolor text-black" onChange={(e) => setPassword(e.target.value)} />
                <div className='bg-primarycolor py-2 px-4 shadow-lg text-white rounded-md cursor-pointer select-none' onClick={() => {
                    setLoading(true);
                    fetch('/api/authadmin', {
                        method: "POST",
                        headers: {'Content-type': 'application/json; charset=UTF-8'},
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    }).then(res => res.json())
                    .then(data => {
                        if(data.status === 200){
                            console.log("admin authenticated");
                            cookieCutter.set('atkn', data.atkn);
                            changeMaxAge('atkn', 60 * 60 * 6);
                            setLoading(false);
                            router.push('/adminpanel');
                        }
                        else{
                            console.log("admin not authenticated");
                            setLoading(false);
                            router.push('/');
                        }
                    })
                }}>Submit</div>
            </div>
        </div>
    )
}

export default AdminLogin