"use client";
import React from "react";

import useStoreModalStore from "@/hooks/use-store-modal";

import Modal from "@/components/ui/modal";

const StoreModal = () => {
  const isOpen = useStoreModalStore((state) => state.isOpen);
  const onClose = useStoreModalStore((state) => state.onClose);
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}
    >
      Future Create Store Form
    </Modal>
  );
};

export default StoreModal;
