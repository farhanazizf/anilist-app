import React from "react";
import styled from "@emotion/styled";
import { Button, InputLabel, TextField } from "@mui/material";
import Modals from "../../components/modal";
import { IModalConfirm, IModals } from "./types";
import Warning from "@mui/icons-material/Warning";
import { WarningAmberOutlined } from "@mui/icons-material";

export const Styled = {
  SectionDetails: styled.section`
    position: relative;
    &.::-webkit-scrollbar {
      display: none;
    }
    .flexWrap {
      display: flex;

      border: 1px solid white;
      border-radius: 8px;
      margin-bottom: 4px;
      background: white;

      p {
        color: black;
        // font-weight: 700;
      }
    }
    .nameWrap {
      display: flex;
      max-width: 50%;
      // overflow-x: scroll;

      p {
        font-size: 13px;
        font-weight: 700;
        color: black;
        margin: 3px 2.5px;
        min-width: fit-content;
      }
    }
    .nameWrap::-webkit-scrollbar {
      height: 2px;
      // width: 12px;
    }

    .nameWrap::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      border: 0.5px solid #ffffff;
    }

    .nameWrap::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: grey;
    }
  `,
  AvatarWrapper: styled.div`
    padding: 12px 24px;
    position: relative;
    min-height: 45vh;
    max-height: 60vh;

    p {
      margin: 5px 0;
    }
    img.bannerImg {
      border-radius: 12px;
      width: 45%;
      // height: fit-content;
    }
  `,
  HeadWrap: styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .nameWrap {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      max-height: 48px;
      overflow-y: scroll;

      p {
        margin: 4px 0;
        color: white;
        font-size: 13px;
      }
    }
    p.titleName {
      color: white;
      font-weight: 700;
      font-size: 24px;
    }

    div.ownedWrap {
      background: white;
      border: 0.5px solid black;

      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      top: 5px;
      right: 5px;

      padding: 5px;
      border-radius: 8px;

      p {
        margin: 0;
        font-size: 8px;
        font-weight: 700;
      }
      p.quantity {
        font-weight: 700;
        font-size: 13px;
      }
    }
  `,
  Chips: styled.p<{ colorType: string }>`
    background: ${(props) => props.theme.colors[`color-${props.colorType}`]};
    padding: 5px 16px;
    // margin-bottom: 5px;
    border-radius: 20px;
    color: white;
    text-transform: capitalize;
    border: 1px solid white;
    font-size: 10px;
    font-weight: 600;
  `,
  OverlapWrap: styled.div`
    display: flex;
  `,
  BackgroundWrapper: styled.div<{ colorType: string }>`
    width: 100%;
    min-height: 370px;
    max-height: 550px;
    position: absolute;
    z-index: 0;
    border-radius: 0 0 10% 10%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      ${(props) => props.theme.colors[`bg-color-${props.colorType}`]} 40%
    );
  `,
  FlexWrap: styled.div<{ wrap?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: scroll;
    flex-wrap: ${(props) => props.wrap ?? ""};

    div.infoWrapper {
      text-align: center;
      h2 {
        font-size: 18px;
        text-transform: capitalize;
      }
      p {
        font-size: 15px;
        color: black;
      }
    }
    div {
      color: black;
    }

    div.infoName {
      // text-transform: capitalize;
      text-align: center;

      p {
        font-size: 10px;
        margin: 8px 0;
      }
    }
    div.infoVal {
      text-align: center;
      font-weight: 700;

      p {
        font-size: 12px;
        margin: 8px 0;
      }
    }
  `,
  DescWrap: styled.div`
    padding: 12px 24px;
  `,
  Divider: styled.div<{ width?: string }>`
    border-bottom: 0.1px solid black;
    width: ${(props) => props.width ?? "100%"};
  `,
  TabWrapper: styled.div`
    margin-top: 20px;

    .tabsz {
      font-size: 15px;
    }
    .tabsz.Mui-selected {
      font-weight: 700;
    }
    div.aboutWrapper {
      p.flavour {
        margin-top: 40px;
      }
    }
  `,
  LoadingWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 350px;
    min-width: 350px;
  `,
  ModalWrapper: styled.div`
    padding: 10px;

    .messageWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg {
        &.success {
          color: ${(props) => props.theme.colors.success};
        }
        &.fail {
          color: ${(props) => props.theme.colors.danger};
        }
        &.warning {
          color: ${(props) => props.theme.colors.warning};
        }
        font-size: 48px;
      }

      p.message {
        font-size: 15px;
        text-align: center;
      }
    }
    div.listWrapper {
      h3 {
        margin-top: 0;
      }
      p.subtitle {
        font-size: 15px;
        margin: 0 0 20px;
      }
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `,
  DeleteWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
  `,
  Button: styled(Button)`
    &&& {
      text-transform: none;
      box-shadow: none;
      border-radius: 8px;
      &.button-agree {
        margin-left: 5px;
        background: ${(props) => props.theme.colors.danger};
      }
      &.button-no {
        background: ${(props) => props.theme.colors.medium};
      }
    }
  `,
  AnimationWrapper: styled.div<{ type?: string }>`
    p {
      margin-bottom: 0;
      text-align: center;
    }
    .loadWrapper {
      position: relative;
      height: 64px;

      .loader {
        position: absolute;
        top: calc(50% - 32px);
        left: calc(50% - 32px);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        perspective: 800px;
      }

      .inner {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      .inner.one {
        left: 0%;
        top: 0%;
        animation: rotate-one 1s linear infinite;
        border-bottom: 3px solid
          ${(props) => props.theme.colors[`color-${props.type}`]};
      }

      .inner.two {
        right: 0%;
        top: 0%;
        animation: rotate-two 1s linear infinite;
        border-right: 3px solid
          ${(props) => props.theme.colors[`color-${props.type}`]};
      }

      .inner.three {
        right: 0%;
        bottom: 0%;
        animation: rotate-three 1s linear infinite;
        border-top: 3px solid
          ${(props) => props.theme.colors[`color-${props.type}`]};
      }

      @keyframes rotate-one {
        0% {
          transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
      }

      @keyframes rotate-two {
        0% {
          transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
      }

      @keyframes rotate-three {
        0% {
          transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
          transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
      }
    }
  `,

  DescriptionWrapper: styled.div<{ colorType?: string }>`
    border-radius: 8px;
    padding: 4px;
    border: 0.5px solid
      ${(props) => props.theme.colors[`color-${props.colorType}`]};
    background: ${(props) => props.theme.colors[`color-${props.colorType}`]};

    .descTitle {
      font-size: 12px;
      font-weight: bold;
      color: white;
    }
    .descBody {
      max-width: 220px; /* Set the desired maximum width */
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 10px;
      color: white;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
    }
  `,

  OverviewContainer: styled.div`
    .infoLabel {
      padding: 8px;
      border-radius: 12px;
      background: white;
      box-shadow: 0px 4px 4px 0px #00000005;
      width: auto;
      justify-content: center;
    }
  `,

  LongCardWrapper: styled.div`
    display: flex;
    margin-bottom: 12px;
    padding: 8px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px #00000005;

    p {
      margin: 0;
    }

    .boxPic {
      display: inline-block;
      width: 25%;
      .avatarImg {
        display: block;
        width: 100%;
      }
    }
    .boxName {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 8px;
      p {
        font-size: 12px;
      }
      .actors {
        color: #a0a4a8;
        font-size: 10px;
      }
    }
    .boxDesc {
      p {
        max-width: 220px; /* Set the desired maximum width */
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 10px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10;
      }
    }
  `,
};

export const InfoLabel: React.FC<{
  value: string;
  infoName: string;
}> = ({ value, infoName }) => {
  return (
    <div className="infoContainer" style={{ marginRight: 16 }}>
      <div className="infoName">
        <p>{infoName}</p>
      </div>
      <Styled.Divider />
      <div className="infoVal">
        <p>{value}</p>
      </div>
    </div>
  );
};

export const LongBox: React.FC<{
  url: string;
  role: string;
  name: string;
  voiceActor: string;
  description: string;
}> = ({ url, role, name, voiceActor = "-", description }) => {
  return (
    <Styled.LongCardWrapper>
      <div className="boxPic">
        <img className="avatarImg" src={url} alt={name} />
      </div>
      <div className="boxName">
        <p style={{ fontWeight: "bold" }}>{name}</p>
        <p>{role}</p>
        <div>
          <p className="actors">Actors</p>
          <p>{voiceActor}</p>
        </div>
      </div>
      {/* <Styled.Divider colorType={"unknown"} > */}
      <div className="boxDesc">
        <p>{description}</p>
      </div>
    </Styled.LongCardWrapper>
  );
};

export const AnimationLoading: React.FC<{ type?: string }> = ({ type }) => {
  return (
    <Styled.AnimationWrapper type={type}>
      <div className="loadWrapper">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>

      <p>Loading...</p>
    </Styled.AnimationWrapper>
  );
};

export const ModalNaming: React.FC<IModals> = ({
  visible,
  processing,
  type,
  onDismiss,
  onSubmit,
}) => {
  const [name, setName] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(event, name);
    onDismiss();
    setName("");
  };

  return (
    <Modals visible={visible} onDismiss={onDismiss} hideCloseIcon>
      <Styled.ModalWrapper>
        {!processing ? (
          <React.Fragment>
            <div className="messageWrapper">
              <WarningAmberOutlined className="success" />

              <p className="message">
                Please add name of this anime for your collection.
              </p>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
              <InputLabel id={`label-name`}>Name</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                autoComplete="off"
                inputProps={{ maxLength: 10 }}
              />

              <Styled.ButtonWrapper>
                <Styled.Button variant="contained" type={"submit"} fullWidth>
                  Submit
                </Styled.Button>
              </Styled.ButtonWrapper>
            </form>
          </React.Fragment>
        ) : (
          <AnimationLoading type={type || "unknown"} />
        )}
      </Styled.ModalWrapper>
    </Modals>
  );
};

export const ModalConfirm: React.FC<IModalConfirm> = ({
  visible,
  title,
  onAgree,
  onDismiss,
}) => {
  const handleAgree = () => {
    onAgree();
    onDismiss();
  };
  return (
    <Modals visible={visible} onDismiss={onDismiss}>
      <Styled.ModalWrapper>
        <div className="messageWrapper">
          <Warning className="warning" />

          <p className="message">{title}</p>
        </div>

        <Styled.ButtonWrapper>
          <Styled.Button
            className="button-no"
            variant="contained"
            type={"button"}
            onClick={onDismiss}
            fullWidth
          >
            No
          </Styled.Button>
          <Styled.Button
            className="button-agree"
            variant="contained"
            type={"button"}
            onClick={handleAgree}
            fullWidth
          >
            Yes
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.ModalWrapper>
    </Modals>
  );
};

export const CoverImage: React.FC<{ url: string; name: string }> = ({
  url,
  name,
}) => {
  return <img className="bannerImg" src={url} alt={name} />;
};

export default CoverImage;
