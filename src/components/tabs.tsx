import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import styled from "@emotion/styled";

interface ITabPanel {
  selected: boolean;
  index: number;
  bgColors?: string;
  children?: React.ReactNode;
}
interface ITab {
  tabName: { category: string; name: string }[];
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  value: string;
  mainColors?: string;
  children?: React.ReactNode;
}

const Styled = {
  Tabs: styled(Tabs)<{ selectedcolor?: string }>`
    &&& {
      text-transform: none;

      .MuiTabs-indicator {
        background-color: ${(props) =>
          props.theme.colors[`color-${props.selectedcolor}`]};
      }
    }
  `,
  Tab: styled(Tab)<{ selectedcolor?: string }>`
    &&& {
      text-transform: none;

      &.Mui-selected {
        color: ${(props) => props.theme.colors[`color-${props.selectedcolor}`]};
      }
      .MuiTabs-indicator {
        background-color: ${(props) =>
          props.theme.colors[`color-${props.selectedcolor}`]};
      }
    }
  `,
  TabContentWrapper: styled.div`
    padding: 26px 0;

    .infoLabel {
    }
  `,
};

export const TabPanel: React.FC<ITabPanel> = ({
  selected,
  index,
  children,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={!selected}
      aria-labelledby={`simple-tab-${index}`}
    >
      {selected && (
        <Styled.TabContentWrapper>
          <div>{children}</div>
        </Styled.TabContentWrapper>
      )}
    </div>
  );
};

const BasicTabs: React.FC<ITab> = ({
  tabName = [],
  value,
  onChange,
  mainColors = "unknown",
  children,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <ThemeProvider theme={theme}> */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Styled.Tabs
          value={value}
          onChange={onChange}
          variant="scrollable"
          selectedcolor={mainColors}
        >
          {tabName.map((val, i) => (
            <Styled.Tab
              className="tabsz"
              key={i}
              label={val.name}
              value={val.category}
              selectedcolor={mainColors}
            />
          ))}
        </Styled.Tabs>
      </Box>
      {children}
      {/* </ThemeProvider> */}
    </Box>
  );
};

export default BasicTabs;
