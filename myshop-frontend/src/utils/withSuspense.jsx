// utils/withSuspense.jsx
import React, { Suspense } from "react";
import { PageLoader } from "../loaders/PageLoader";

const withSuspense = (Component) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
};

export default withSuspense;
