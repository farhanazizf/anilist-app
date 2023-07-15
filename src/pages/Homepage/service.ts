import { useQuery, gql } from "@apollo/client";
import { IAnime } from "./types";

const GET_ANIME = gql`
  query ($page: Int, $search: String) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME, search: $search, sort: [POPULARITY_DESC]) {
        id
        title {
          romaji
          english
        }
        genres
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

export const useListAnime = () => {
  const gqlVariables = {
    perPage: 20,
    page: 1,
    search: undefined,
  };

  const {
    loading,
    error,
    data: anime,
    fetchMore,
    refetch,
  } = useQuery<IAnime>(GET_ANIME, {
    variables: gqlVariables,
    notifyOnNetworkStatusChange: true,
  });

  return { anime, loading, error, fetchMore, refetch };
};
