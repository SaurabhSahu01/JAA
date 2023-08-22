import React from 'react'
import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router';

function Verify({ userid }) {
    const router = useRouter();
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/getverificationdetails?uid=${userid}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "authorization": `Bearer ${cookieCutter.get('atkn')}`
            },
        }).then(res => res.json()).then(data => {
            setData(data.data);
        })
    }, [])
    return (
        data && <div className='flex flex-col justify-center items-center gap-3'>
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <img src={data.image1} alt="receipt" className='w-full h-fit'></img>
                <img src={data.image2} alt="receipt" className='w-full h-fit'></img>
            </div>
            <div className='w-full flex flex-row justify-center items-center gap-5'>
                <button className='px-5 py-3 rounded-md bg-green-500 text-white' onClick={() => {
                    fetch(`/api/verifyuser?uid=${userid}`, {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            "authorization": `Bearer ${cookieCutter.get('atkn')}`
                        },
                        body: JSON.stringify({
                            action: "verify"
                        })
                    }).then(res => res.json()).then(data => {
                        console.log(data);
                        setTimeout(() => {
                            router.push('/adminpanel/users');
                        }, 500)
                    }).catch(err => console.error(err));
                }}>Verify</button>
                <button className='px-5 py-3 rounded-md bg-red-500 text-white' onClick={() => {
                    fetch(`/api/verifyuser?uid=${userid}`, {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            "authorization": `Bearer ${cookieCutter.get('atkn')}`
                        },
                        body: JSON.stringify({
                            action: "not verify"
                        })
                    }).then(res => res.json()).then(data => {
                        console.log(data);
                        setTimeout(() => {
                            router.push('/adminpanel/users');
                        }, 500)
                    }).catch(err => console.error(err));
                }}>Do Not Verify</button>

            </div>
        </div>
    )
}

export default Verify