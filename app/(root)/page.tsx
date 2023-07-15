'use client'

import {useClerk, UserButton} from "@clerk/nextjs";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Modal} from "@/components/ui/modal";
import {useStoreModal} from "@/hooks/use-store-modal";


export default function Home() {

    const router = useRouter()

    const clerk = useClerk()


    const onOpen = useStoreModal((state)=>state.onOpen)
    const isOpen = useStoreModal((state)=>state.isOpen)


    useEffect(()=>{
        if(!clerk.user){
            router.push('/sign-in')
        }

        if (!isOpen){
            onOpen()
        }

    },[clerk.user,isOpen,onOpen])




    return (
        <div className={"p-4"}>
            <UserButton afterSignOutUrl={'/sign-in'}/>
            Root page
        </div>
    )
}
