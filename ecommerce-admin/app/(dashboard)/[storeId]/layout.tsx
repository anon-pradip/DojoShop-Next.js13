import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/Navbar";

const DashboardLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
      id: params.storeId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
