import { NextResponse } from "next/server";

export default async function middleware(req) {
    let profileSet = req.cookies.get('profileSet');
    //console.log(profileSet.value)
    let userToken = req.cookies.get('userToken');
    let refreshToken = req.cookies.get('refreshToken');
    let atkn = req.cookies.get('atkn');
    let url = req.url;
    const host = new URL(url).hostname;
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const domain = `${protocol}://${host}`;
    console.log(domain)

    if(userToken && refreshToken && (profileSet?.value === 'true') && (url.includes('/registration'))){
        return NextResponse.redirect(`${domain}/`);
    }
    if (!userToken && !refreshToken && (url.includes('/feeds') || url.includes('/messages') || url.includes('/join'))) {
        return NextResponse.redirect(`${domain}/login`);
    }
    if(userToken && refreshToken && (url.includes('/login') || url.includes('/signup'))){
        return NextResponse.redirect(`${domain}/`);
    }
    if(!atkn && (url.includes('/adminpanel'))){
        return NextResponse.redirect(`${domain}/adminlogin`);
    }
}