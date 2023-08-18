import prismadb from "@/lib/prismadb";
import React from "react";

export const getSalesCount = async (storeId: string) => {
  const stockCount = await prismadb.order.count({
    where: {
      storeId,
      isPaid: true,
    },
  });
  return stockCount;
};
