import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "./bottom-nav";
// import { Detector } from "react-detect-offline";
import Styled from "./style";

export const MainLayout: React.FC<{
  backButton?: boolean;
  children?: React.ReactNode;
}> = ({ backButton, children }) => {
  const navigate = useNavigate();

  // const [ToastOffline, setToast] = useToast({ offlineMode: true });

  return (
    <Styled.MainContainer>
      {/* <Detector
        onChange={() => setToast({ message: "You are offline!" })}
        render={({ online }) => (online ? null : <ToastOffline />)}
      /> */}
      <Styled.MainWrapper>
        {backButton ? (
          <Styled.IconChevron onClick={() => navigate(-1)} />
        ) : null}
        {children}
        <BottomNav />
      </Styled.MainWrapper>
    </Styled.MainContainer>
  );
};
