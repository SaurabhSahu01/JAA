import React from 'react';
import Input from '../common/Input';
import { useRouter } from 'next/router';
import cookieCutter from "cookie-cutter";
import Spinner from '../common/Spinner';
import { changeMaxAge } from '@/src/utils/login';

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
        <div className='w-full h-screen flex items-center justify-center bg-[url("/bg/bglightani.svg")] bg-no-repeat bg-cover'>
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
                            changeMaxAge('atkn', 7200);
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