"use client";

import React, { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import Modal from "@/components/ui/modal";
import useStoreModalStore from "@/hooks/use-store-modal";

const SetupPage = () => {
  const isOpen = useStoreModalStore((state) => state.isOpen);
  const onOpen = useStoreModalStore((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">Root page</div>;
};

export default SetupPage;
