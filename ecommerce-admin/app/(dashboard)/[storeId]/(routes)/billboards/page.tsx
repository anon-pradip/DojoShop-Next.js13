import React from "react";
import { BillboardClient } from "./components/client";

type Props = {};

const BillboardsPage = (props: Props) => {
  return (
    <div className=" flex flex-col">
      <div className=" flex space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
