import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

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
      this will be a navbar
      {children}
    </div>
  );
};

export default DashboardLayout;
