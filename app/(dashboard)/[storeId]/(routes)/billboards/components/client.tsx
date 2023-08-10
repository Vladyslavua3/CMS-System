"use client"
import React from 'react';
import {Heading} from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {useParams, useRouter} from "next/navigation";
import {BillboardColumn, columns} from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import {DataTable} from "@/components/ui/data-table";

interface BillboardClientProps {
    data:BillboardColumn[]
}


const BillboardClient:React.FC<BillboardClientProps> = ({data}) => {

    const router = useRouter()
    const params = useParams()


    const handlerForButton = () => {
        router.push(`/${params.storeId}/billboards/new`)
    }

    return (
        <>
            <div className={'flex items-center justify-between'}>
                <Heading title={`Billboards (${data.length})`}
                         description={'Manage billboards for you store'}
                />
                <Button onClick={handlerForButton}>
                    <Plus className={'mr-2 h-4 w-4'}/>
                    Add New
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey={'label'} columns={columns} data={data}/>
        </>
    );
};

export default BillboardClient;
