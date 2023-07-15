import { useQuery, gql } from "@apollo/client";
import { IAnime } from "../Homepage/types";

const GET_ANIME_DETAILS = gql`
  query ($id: Int) {
    Page(page: 1, perPage: 20) {
      media(id: $id, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        genres
        description(asHtml: false)
        startDate {
          month
          year
        }
        endDate {
          month
          year
        }
        season
        format
        status
        episodes
        duration
        characters {
          edges {
            name
            role
            voiceActors {
              name {
                full
              }
            }
            node {
              name {
                full
              }
              image {
                large
              }
              description
            }
          }
        }
        coverImage {
          extraLarge
        }
        studios {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;

export const useDetailAnime = (id: string) => {
  const gqlVariables = {
    id,
  };

  const { loading, error, data, fetchMore, refetch } = useQuery<IAnime>(
    GET_ANIME_DETAILS,
    {
      variables: gqlVariables,
      notifyOnNetworkStatusChange: true,
    }
  );

  const anime = data?.Page.media[0];

  return { anime, loading, error, fetchMore, refetch };
};
