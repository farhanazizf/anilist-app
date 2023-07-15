import React from "react";
import { CircularProgress } from "@mui/material";
import { MainLayout } from "../../components/main-layout";

const View = React.lazy(() => import("./view"));

const Details: React.FC = () => {
  return (
    <MainLayout backButton>
      <React.Suspense fallback={<CircularProgress />}>
        <View />
      </React.Suspense>
    </MainLayout>
  );
};

export default Details;
