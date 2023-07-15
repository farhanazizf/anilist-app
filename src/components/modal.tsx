import React from "react";
import { Modal } from "@mui/material";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { mqGreater } from "../utils/media";

interface ContainerProps {
  align?: string;
}

export interface ModalProps extends ContainerProps {
  visible: boolean;
  onDismiss: () => void;
  hideCloseIcon?: boolean;
  showBackdrop?: boolean;
  children?: React.ReactNode;
}

export const StyledModals = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
`;

export const Container = styled.section<ContainerProps>`
  position: relative;
  border-radius: 1rem;
  padding: 2.15rem 1.5rem 2rem;
  width: 100%;
  // min-width: 90vw;
  text-align: ${(props) => props.align};
  background: #fff;

  ${mqGreater["sm"]} {
    max-width: 35rem;
  }

  ${mqGreater["md"]} {
    max-width: 35rem;
  }
`;

const CloseNow = styled(CloseIcon)`
  &&& {
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const Modals: React.FC<ModalProps> = ({
  visible = false,
  onDismiss,
  align,
  hideCloseIcon,
  children,
}) => {
  return (
    <StyledModals
      open={visible}
      onClose={(_, reason) => (reason === "backdropClick" ? null : onDismiss)}
      disableEscapeKeyDown
    >
      <Container align={align}>
        {hideCloseIcon ? null : <CloseNow onClick={onDismiss} />}

        {children}
      </Container>
    </StyledModals>
  );
};

export default Modals;
