'use client'

import {useClerk, UserButton} from "@clerk/nextjs";
import {useEffect} from "react";
import {useRouter} from "next/navigation";


export default function Home() {

    const router = useRouter()

    const clerk = useClerk()

    useEffect(()=>{
        if(!clerk.user){
            router.push('/sign-in')
        }
    })


    return (
        <div>
            <UserButton afterSignOutUrl="/sign-in"/>
            <h1>This is a protected</h1>
        </div>
    )
}
