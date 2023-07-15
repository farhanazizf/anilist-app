import { ChevronLeftOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
import { mqGreater } from "../utils/media";

const Styled = {
  MainContainer: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  MainWrapper: styled.div`
    background: #f8f8f8;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 56px;

    ${mqGreater["sm"]} {
      max-width: 34rem;
      position: relative;
      margin: 0 auto;
    }

    ${mqGreater["md"]} {
      max-width: 35rem;
      position: relative;
      margin: 0 auto;
    }
  `,
  IconChevron: styled(ChevronLeftOutlined)`
    &&& {
      z-index: 1;
      cursor: pointer;
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 32px;
      color: white;
    }
  `,
};

export default Styled;
