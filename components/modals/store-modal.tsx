"use client"

import {Modal} from "@/components/ui/modal";
import {useStoreModal} from "@/hooks/use-store-modal";

export const StoreModal = () => {

    const storeForModal = useStoreModal()
    return(
        <Modal title={"Create Store"}
               description={"Add a new store to manage products and categories"}
               isOpen={storeForModal.isOpen}
               onClose={storeForModal.onClose}>
            Future Create Store Form
        </Modal>
        )
}