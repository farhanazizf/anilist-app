import React from "react";
import { useNavigate } from "react-router-dom";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { CircularProgress } from "@mui/material";
// import { MainLayout } from "../../components/main-layout";
import { Styled, SkeletonCard } from "../Homepage/style";
import GlobalContext from "../../context/global-context";

const Card = React.lazy(() => import("../Homepage/style"));

const MyCollection: React.FC = () => {
  const navigate = useNavigate();
  const { collections } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <React.Fragment>
      <Styled.SectionList>
        <div className="listTitle">
          <p>My Collection</p>
        </div>

        <div className="listWrapper">
          <React.Suspense fallback={<CircularProgress />}>
            {loading
              ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
              : collections.map((val, i) => (
                  <Card
                    subtitle={String(val.id)}
                    url={val.image}
                    name={val.collectionName}
                    key={i}
                    onClick={() => navigate(`/anime/${val.id}/collection`)}
                    colorType={val.genres[0] || "unknown"}
                  />
                ))}
          </React.Suspense>
        </div>
        {collections.length === 0 ? (
          <div className="emptyWrap">
            <NotInterestedIcon />
            <p>You dont have any collection</p>
          </div>
        ) : null}
      </Styled.SectionList>
    </React.Fragment>
  );
};

export default MyCollection;
