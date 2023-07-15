import { CircularProgress } from "@mui/material";
import React from "react";
import { MainLayout } from "../../components/main-layout";

const View = React.lazy(() => import("./view"));

const Homepage: React.FC = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<CircularProgress />}>
        <View />
      </React.Suspense>
    </MainLayout>
  );
};

export default Homepage;
