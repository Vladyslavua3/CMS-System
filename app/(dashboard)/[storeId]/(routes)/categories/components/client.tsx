"use client"
import React from 'react';
import {Heading} from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {useParams, useRouter} from "next/navigation";
import {columns} from "@/app/(dashboard)/[storeId]/(routes)/categories/components/columns";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";
import {CategoryColumn} from "./columns";

interface CategoryClientProps {
    data:CategoryColumn[]
}


const CategoryClient:React.FC<CategoryClientProps> = ({data}) => {

    const router = useRouter()
    const params = useParams()


    const handlerForButton = () => {
        router.push(`/${params.storeId}/categories/new`)
    }

    return (
        <>
            <div className={'flex items-center justify-between'}>
                <Heading title={`Categories (${data.length})`}
                         description={'Manage categories for you store'}
                />
                <Button onClick={handlerForButton}>
                    <Plus className={'mr-2 h-4 w-4'}/>
                    Add New
                </Button>
            </div>
            <Separator/>
            <DataTable searchKey={'name'} columns={columns} data={data}/>
            <Heading title={'API'} description={'API calls for Categories'}/>
            <Separator/>
            <ApiList entityName={'categories'} entityIdName={'categoryId'}/>
        </>
    );
};

export default CategoryClient;
