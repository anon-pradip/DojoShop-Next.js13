"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import ApiList from "@/components/ui/api-list";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { ProductColumn, columns } from "./columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <div className=" flex flex-col w-full gap-5">
      <div className=" flex flex-col">
        <div className="w-full flex flex-row justify-between items-center">
          <Heading
            title={`Products (${data.length})`}
            description="Manage products for your store"
          />
          <Button
            variant="default"
            onClick={() => router.push(`/${params.storeId}/products/new`)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Products" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </div>
  );
};
