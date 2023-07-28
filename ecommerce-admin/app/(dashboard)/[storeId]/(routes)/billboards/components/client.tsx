"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { BillboardColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div className=" flex flex-col w-full gap-5">
      <div className=" flex flex-col">
        <div className="w-full flex flex-row justify-between items-center">
          <Heading
            title={`Billboards (${data.length})`}
            description="Manage billboards for your store"
          />
          <Button
            variant="default"
            onClick={() => router.push(`/${params.storeId}/billboards/new`)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
      {/* hello */}
    </div>
  );
};
