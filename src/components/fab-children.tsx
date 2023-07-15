import * as React from "react";
import styled from "@emotion/styled";
import SpeedDial from "@mui/material/SpeedDial";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Favorite from "@mui/icons-material/Favorite";

import { mqGreater } from "../utils/media";
import { AddCircleRounded } from "@mui/icons-material";

interface IFabs {
  alreadyAdded: boolean;
  onAdd?: () => void;
  onRemove?: () => void;
}

const Styled = {
  FabWrapper: styled.div`
    position: fixed;
    width: 100%;
    bottom: 50px;
    // right: 5px;
    // height: 100%;
    display: flex;
    justify-content: center;

    ${mqGreater["sm"]} {
      max-width: 35rem;
    }
    ${mqGreater["md"]} {
      max-width: 35rem;
    }

    &&& {
      .fabChildren {
        .MuiSpeedDial-fab {
          background: ${(props) => props.theme.colors.lightmedium};
        }
      }

      .MuiSpeedDialAction-staticTooltipLabel {
        font-size: 13px;
        color: black;
        display: flex;
        min-width: fit-content;
      }
    }
  `,
};

const actions = [
  {
    icon: <RemoveCircleOutlineIcon color="error" />,
    name: "Remove Collection",
    for: "remove",
  },
  {
    icon: <AddCircleRounded color="primary" />,
    name: "Add Collection",
    for: "add",
  },
];

const FabChildren: React.FC<IFabs> = ({ alreadyAdded, onAdd, onRemove }) => {
  return (
    <Styled.FabWrapper>
      {/* <Box sx={{ position: "fixed", transform: "translateZ(0px)", flexGrow: 1 }}> */}
      <SpeedDial
        className="fabChildren"
        ariaLabel="fabChildren"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Favorite style={{ color: alreadyAdded ? "red" : "black" }} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            title={action.name}
            onClick={() => (action.for === "add" ? onAdd?.() : onRemove?.())}
            style={{
              display:
                (action.for === "add" && alreadyAdded) ||
                (action.for === "remove" && !alreadyAdded)
                  ? "none"
                  : "",
            }}
          />
        ))}
      </SpeedDial>
      {/* </Box> */}
    </Styled.FabWrapper>
  );
};

export default FabChildren;
