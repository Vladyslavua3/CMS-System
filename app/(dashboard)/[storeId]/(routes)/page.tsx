import React from "react";
import prismadb from "@/lib/prismadb";

interface DashboardPropsType {
    params:{storeId:string}
}


const DashBoardPage:React.FC<DashboardPropsType> = async ({params}) =>{


    return(
        <div>
            Active Store
        </div>
    )
}

export default DashBoardPage