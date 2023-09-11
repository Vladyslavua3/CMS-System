"use client"
import React from 'react';
import {Heading} from "@/components/ui/heading";
import {Separator} from "@/components/ui/separator";
import {columns} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";
import {DataTable} from "@/components/ui/data-table";
import {OrderColumn} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";

interface OrdersClientProps {
    data:OrderColumn[]
}


const OrdersClient:React.FC<OrdersClientProps> = ({data}) => {

    return (
        <>
            <Heading title={`Orders (${data.length})`}
                     description={'Manage orders for you store'}
            />
            <Separator/>
            <DataTable searchKey={'products'} columns={columns} data={data}/>
        </>
    );
};

export default OrdersClient;
