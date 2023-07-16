import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress, Skeleton } from "@mui/material";
import GlobalContext from "../../context/global-context";
import { useDetailAnime } from "./service";
import { Styled, ModalConfirm, InfoLabel, LongBox, ModalNaming } from "./style";
import BasicTabs, { TabPanel } from "../../components/tabs";
import { IConfirm, Month, initialTab } from "./types";
import FabChildren from "../../components/fab-children";
import { ICollection } from "../../context/types";
import useToast from "../../components/toast";

const CoverImage = React.lazy(() =>
  import("./style").then((module) => ({
    default: module.CoverImage,
  }))
);

const initialModal = { visible: false, success: false };

const Detail: React.FC = () => {
  const navigate = useNavigate();
  const [Toast, setToast] = useToast();
  const { id, collection } = useParams<{ id: string; collection?: string }>();
  const { collections, onSelectCollection, onRemoveCollection } =
    React.useContext(GlobalContext);
  const { anime, loading, error } = useDetailAnime(id || "");

  const studios = anime?.studios.nodes.map((val) => val.name);
  const [tabValue, setTabValue] = React.useState<string>(
    initialTab[0].category
  );
  const [modal, setModal] = React.useState({
    ...initialModal,
  });
  const [visibleList, setVisibleList] = React.useState(initialModal);
  const [confirm, setConfirm] = React.useState<IConfirm>({
    visible: false,
    id: 0,
    collectionName: "",
  });
  const [errorMsg, setErrorMsg] = React.useState("");

  const myCollection = collection
    ? collections.filter((val) => val.id === parseInt(id || "0"))
    : collections.filter((val) => val.title.romaji === anime?.title.romaji);

  if (error) setToast({ message: error.message });

  const upperFirst = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleChange = (newValue: string) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const triggerAdd = () => {
    setModal({ visible: true, success: true });
  };

  const addToCollection = (
    e: React.FormEvent<HTMLFormElement>,
    name: string
  ) => {
    e.preventDefault();

    if (anime) {
      const isUnique = collections.every((val) => val.collectionName !== name);
      const isNoSpecialCharacter = !name.match(/[^a-zA-Z0-9]/);

      if (isUnique && isNoSpecialCharacter) {
        setErrorMsg("");

        onSelectCollection({
          id: anime?.id,
          genres: anime?.genres,
          image: anime.coverImage.extraLarge,
          title: anime.title,
          collectionName: name,
        });

        setModal({ ...initialModal });

        setToast({ message: "Success add collection!" });
        navigate(`/my-collection`);
      } else {
        setErrorMsg(
          !isNoSpecialCharacter
            ? "Special characters not allowed!"
            : "Name already used, please choose another name"
        );
        setTimeout(() => {
          setModal({ ...modal, visible: true, success: false });
        }, 350);
      }
    }
  };

  const triggerRemove = (myCollection: ICollection[]) => {
    if (anime) {
      if (myCollection.length < 2) {
        setConfirm({
          visible: true,
          id: myCollection[0].id,
          collectionName: myCollection[0].collectionName,
        });
      } else {
        setVisibleList({ ...visibleList, visible: true });
      }
    }
  };

  const removeCollection = (id: number, name: string) => {
    if (anime) {
      onRemoveCollection({
        id,
        genres: anime.genres,
        title: anime.title,
        image: anime.coverImage.extraLarge,
        collectionName: name,
      });
      setVisibleList({ success: true, visible: true });
      setToast({ message: "Success remove collection!" });
      navigate(`/anime`);
    }
  };

  return (
    <React.Fragment>
      <Toast />

      <ModalConfirm
        visible={confirm.visible}
        onDismiss={() => setConfirm({ ...confirm, visible: false })}
        onAgree={() => removeCollection(confirm.id, confirm.collectionName)}
        title="Are you sure want to remove this collection?"
      />

      <ModalNaming
        visible={modal.visible}
        success={modal.success}
        processing={loading}
        errorMsg={errorMsg}
        onDismiss={() => setModal({ ...modal, visible: false })}
        onSubmit={(e, name: string) => addToCollection(e, name)}
      />

      <Styled.SectionDetails>
        <Styled.BackgroundWrapper colorType={anime?.genres[0] || "unknown"} />

        <Styled.AvatarWrapper>
          {loading && !anime ? (
            <Styled.HeadWrap>
              <Skeleton variant="text" width={150} sx={{ bgcolor: "white" }} />
              <Skeleton variant="text" width={150} sx={{ bgcolor: "white" }} />
            </Styled.HeadWrap>
          ) : (
            <Styled.HeadWrap>
              <p className="titleName">
                {upperFirst(anime?.title.romaji || "")}
                {anime?.title.native !== anime?.title.romaji
                  ? ` | ${anime?.title.native}`
                  : ""}
              </p>
              {myCollection.length > 0 ? (
                <div className="ownedWrap">
                  <p className="quantity">ADDED</p>
                </div>
              ) : null}
            </Styled.HeadWrap>
          )}
          {myCollection.length > 0 ? (
            <div className="flexWrap">
              <p style={{ fontSize: 10 }}>Collection Name: </p>

              <div className="nameWrap">
                {myCollection.map((val) => (
                  <p key={val.id}> {val.collectionName}</p>
                ))}
              </div>
            </div>
          ) : null}
          <Styled.OverlapWrap>
            {loading && !anime ? (
              <Styled.LoadingWrapper>
                <CircularProgress />
              </Styled.LoadingWrapper>
            ) : (
              <React.Suspense fallback={<CircularProgress />}>
                <CoverImage
                  url={anime?.coverImage.extraLarge || ""}
                  name={anime?.title.romaji || ""}
                />
                <div style={{ padding: "0 12px" }}>
                  <Styled.FlexWrap
                    wrap="wrap"
                    style={{
                      justifyContent: "flex-start",
                    }}
                  >
                    {anime?.genres.map((val, i) => (
                      <Styled.Chips
                        style={{ marginRight: 4 }}
                        key={i}
                        colorType={anime?.genres[0] || "unknown"}
                      >
                        {val}
                      </Styled.Chips>
                    ))}
                  </Styled.FlexWrap>

                  <Styled.DescriptionWrapper
                    colorType={anime?.genres[0] || "unknown"}
                  >
                    <p className="descTitle">Description</p>
                    <p className="descBody">
                      {anime?.description.replace(/<br>/g, "\r\n")}
                    </p>
                  </Styled.DescriptionWrapper>
                </div>
              </React.Suspense>
            )}
          </Styled.OverlapWrap>
        </Styled.AvatarWrapper>

        {!loading && (
          <Styled.DescWrap>
            <Styled.TabWrapper>
              <BasicTabs
                tabName={initialTab}
                value={tabValue}
                onChange={(_, val) => handleChange(val)}
                mainColors={anime?.genres[0]}
              >
                {initialTab.map((val, i) => (
                  <TabPanel
                    index={i}
                    selected={tabValue === val.category}
                    key={i}
                  >
                    {val.category === "overview" ? (
                      <Styled.OverviewContainer>
                        <Styled.FlexWrap
                          className="infoLabel"
                          wrap="wrap"
                          style={{ overflow: "hidden" }}
                        >
                          <InfoLabel
                            infoName={"Season"}
                            value={`${anime?.season}`}
                          />
                          <InfoLabel
                            infoName={"Status"}
                            value={`${anime?.status}`}
                          />
                          <InfoLabel
                            infoName={"Start at"}
                            value={`${
                              Month[(anime?.startDate.month ?? 2) - 1 ?? 1] ??
                              "-"
                            }, ${anime?.startDate.year}`}
                          />
                          <InfoLabel
                            infoName={"End at"}
                            value={`${
                              Month[(anime?.endDate.month ?? 2) - 1 ?? 1] ?? "-"
                            }, ${anime?.endDate.year}`}
                          />

                          <InfoLabel
                            infoName={"Format"}
                            value={`${anime?.format}`}
                          />
                          <InfoLabel
                            infoName={"Episodes"}
                            value={`${anime?.episodes}`}
                          />
                          <InfoLabel
                            infoName={"Duration"}
                            value={`${anime?.duration}mins`}
                          />
                          <InfoLabel infoName={"Studio"} value={`${studios}`} />
                        </Styled.FlexWrap>
                      </Styled.OverviewContainer>
                    ) : (
                      <React.Fragment>
                        {anime?.characters.edges.map((val, i) => (
                          <LongBox
                            key={i}
                            url={val.node.image.large}
                            name={val.node.name.full}
                            role={val.role}
                            voiceActor={val.voiceActors[0]?.name?.full}
                            description={val.node.description}
                          />
                        ))}
                      </React.Fragment>
                    )}
                  </TabPanel>
                ))}
              </BasicTabs>
            </Styled.TabWrapper>
          </Styled.DescWrap>
        )}
        <FabChildren
          alreadyAdded={myCollection.length > 0}
          onAdd={() => triggerAdd()}
          onRemove={() => triggerRemove(myCollection)}
        />
      </Styled.SectionDetails>
    </React.Fragment>
  );
};

export default Detail;
