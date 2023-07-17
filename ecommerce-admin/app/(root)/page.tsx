"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import Modal from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      <Modal title="test" description="test" isOpen onClose={() => {}}>
        children
      </Modal>
    </div>
  );
};

export default SetupPage;
