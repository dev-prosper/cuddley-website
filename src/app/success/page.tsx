import React, { Suspense } from "react";
import OrderSuccessPage from "./successClient";

export default function OrderSuccessPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSuccessPage />
    </Suspense>
  );
}
