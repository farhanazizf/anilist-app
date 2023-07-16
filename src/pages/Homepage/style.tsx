import Skeleton from "@mui/material/Skeleton";
import React from "react";
import styled from "@emotion/styled";
import { mqLess } from "../../utils/media";

export const Styled = {
  SectionList: styled.section`
    padding: 12px 24px;
    flex-wrap: nowrap;

    div.listTitle {
      display: flex;
      justify-content: space-between;

      p {
        font-weight: 700;
        font-size: 24px;
      }
    }

    div.listWrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    div.emptyWrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0.5;

      margin-top: 50px;

      svg {
        font-size: 48px;
      }
    }
  `,
  ItemWrapper: styled.div<{ colorType?: string }>`
    background: ${(props) => props.theme.colors[`color-${props.colorType}`]};
    position: relative;
    cursor: pointer;
    margin: 1rem 0;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;

    max-width: 13.5rem;
    min-width: 13.5rem;

    div.ownedWrap {
      background: white;

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
        color: black;
      }
      p.quantity {
        font-weight: 700;
        font-size: 13px;
      }
    }

    ${mqLess["sm"]} {
      max-width: 150px;
      min-width: 140px;
    }

    ${mqLess["screen414"]} {
      max-width: 150px;
      min-width: 140px;
    }

    ${mqLess["screen375"]} {
      max-width: 140px;
      min-width: 140px;
    }
  `,
  ImgWrapper: styled.div`
    padding: 8px 12px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    height: 90%;
    img.anime {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,
  DescWrapper: styled.div<{ colorType?: string }>`
    background-image: linear-gradient(
      to bottom,
      rgba(249, 249, 249, 0.65) 0%,
      rgba(255, 255, 255, 1)
    );
    position: absolute;
    padding: 12px;
    bottom: 0;
    border-radius: 0px 8px 0px 0px;
    // width: 100%;
    max-width: 14rem;
    min-width: 50%;
    display: flex;
    flex-wrap: wrap;

    ${mqLess["screen414"]} {
      max-width: 165px;
      // min-width: 50%;
    }

    ${mqLess["screen375"]} {
      max-width: 150px;
      // min-width: 70%;
    }

    p {
      width: fit-content;
      margin: 0;
      margin-top: 5px;
    }
    p.animeName {
      font-weight: 700;
      font-size: 12px;
    }
    p.animeId {
      font-size: 10px;
    }
  `,
  SkeletonWrapper: styled.div`
    margin: 1rem 0;
    min-height: 200px;
    max-height: 200px;
    overflow: hidden;

    max-width: 14rem;
    min-width: 14rem;

    ${mqLess["screen414"]} {
      max-width: 165px;
      min-width: 165px;
    }

    ${mqLess["screen375"]} {
      max-width: 150px;
      min-width: 150px;
    }

    ${mqLess["screen360"]} {
      max-width: 150px;
      min-width: 150px;
    }
  `,
};

const CardAnime: React.FC<{
  name: string;
  subtitle: string;
  url: string;
  onClick?: () => void;
  owned?: number;
  colorType: string;
}> = ({ name = "", subtitle, url, owned = 0, colorType, onClick }) => {
  return (
    <Styled.ItemWrapper colorType={colorType} onClick={onClick}>
      <Styled.ImgWrapper>
        <img className="anime" src={url} alt={name} />
      </Styled.ImgWrapper>
      <Styled.DescWrapper>
        <div>
          <p className="animeId" style={{ textOverflow: "ellipsis" }}>
            #{subtitle}
          </p>
          <p className="animeName">{name}</p>
        </div>
      </Styled.DescWrapper>

      {owned > 0 ? (
        <div className="ownedWrap">
          <p className="quantity">ADDED</p>
        </div>
      ) : null}
    </Styled.ItemWrapper>
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <Styled.SkeletonWrapper>
      <Skeleton variant="rectangular" width={160} height={160} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Styled.SkeletonWrapper>
  );
};

export default CardAnime;
