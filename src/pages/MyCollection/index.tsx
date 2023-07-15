import React from "react";
import { CircularProgress } from "@mui/material";
import { MainLayout } from "../../components/main-layout";

const View = React.lazy(() => import("./view"));

const MyCollection: React.FC = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<CircularProgress />}>
        <View />
      </React.Suspense>
    </MainLayout>
  );
};

export default MyCollection;
