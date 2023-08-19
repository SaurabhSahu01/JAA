import React from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import User from '@/components/User';

function UserPage() {
    const router = useRouter();
    //console.log(router.query.userid);
    return (
        <Layout title={`${router.query.userid}`}>
            <User useruid={`${router.query.userid}`}/>
        </Layout>
    )
}

export default UserPage