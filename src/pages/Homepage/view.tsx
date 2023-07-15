import React, { useEffect } from "react";
import useToast from "../../components/toast";
import { Styled, SkeletonCard } from "./style";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import GlobalContext from "../../context/global-context";
import { useListAnime } from "./service";
import { CircularProgress, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDebounce } from "use-debounce";

const CardAnime = React.lazy(() => import("./style"));

const HomepageView: React.FC = () => {
  const navigate = useNavigate();
  const [Toast, setToast] = useToast();
  const { collections } = React.useContext(GlobalContext);

  const [searchText, setSearchText] = React.useState("");
  const [debounceVals] = useDebounce(searchText, 600);

  const { loading, error, anime, refetch, fetchMore } = useListAnime();

  if (error) setToast({ message: error.message });

  const upperFirst = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const countOwned = (id: number) => {
    const checkOwned = collections?.filter((val) => val.id === id);

    return checkOwned?.length || 0;
  };

  useEffect(() => {
    handleSearch();
    window.scrollTo({ top: 0, behavior: "smooth" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceVals]);

  const handleSearch = () => {
    const gqlVariables = {
      perPage: 20,
      page: 1,
      search: debounceVals === "" ? undefined : debounceVals,
    };

    refetch(gqlVariables);
  };

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        page: (anime?.Page?.pageInfo.currentPage || 1) + 1,
        perPage: anime?.Page?.pageInfo.perPage || 20,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const incomingValue = fetchMoreResult.Page.media;
        const pageInfo = fetchMoreResult.Page.pageInfo;

        return incomingValue.length
          ? {
              Page: {
                __typename: prevResult.Page.__typename,
                pageInfo,
                media: [...prevResult.Page.media, ...incomingValue],
              },
            }
          : prevResult;
      },
    });
  };

  return (
    <React.Fragment>
      <Toast />
      <Styled.SectionList>
        <div className="listTitle">
          <p>Anime List</p>
          <div style={{ display: "flex" }}>
            <TextField
              id="standard-basic"
              label="search anime here..."
              variant="standard"
              onChange={(e) => setSearchText(e.target.value)}
              disabled={loading}
            />
            {loading ? (
              <CircularProgress />
            ) : (
              <Search style={{ alignSelf: "center" }} />
            )}
          </div>
        </div>

        <InfiniteScroll
          dataLength={(anime?.Page?.media?.length || 20) * 20}
          pullDownToRefreshThreshold={100}
          next={handleFetchMore}
          hasMore={
            (anime?.Page?.media?.length || 0) <
            (anime?.Page?.pageInfo?.total || 0)
          }
          loader={
            <div className="listWrapper">
              {[...Array(2)].map((_, ix) => (
                <SkeletonCard key={ix} />
              ))}
            </div>
          }
        >
          <div className="listWrapper">
            <React.Suspense fallback={<CircularProgress />}>
              {loading && !anime
                ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
                : anime?.Page?.media?.map((val, i) => (
                    <CardAnime
                      subtitle={String(val.genres.slice(0, 2))}
                      url={val.coverImage.extraLarge}
                      name={upperFirst(val.title.romaji)}
                      key={i}
                      owned={countOwned(val.id)}
                      onClick={() => navigate(`/anime/${val.id}`)}
                      colorType={val.genres[0] || "unknown"}
                    />
                  ))}
            </React.Suspense>
          </div>
        </InfiniteScroll>
      </Styled.SectionList>
    </React.Fragment>
  );
};

export default HomepageView;
