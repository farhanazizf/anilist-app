interface IPageInfo {
  currentPage: number;
  perPage: number;
  total: number;
}

export interface IAnimeDetails {
  id: number;
  title: {
    romaji: string;
    native: string;
  };
  genres: string[];
  description: string;
  startDate: {
    month: number;
    year: number;
  };
  endDate: {
    month: number;
    year: number;
  };
  season: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  characters: {
    edges: {
      name: string;
      role: string;
      voiceActors: {
        name: {
          full: string;
        };
      }[];
      node: {
        name: {
          full: string;
        };
        image: {
          large: string;
        };
        description: string;
      };
    }[];
  };
  coverImage: {
    extraLarge: string;
  };
  studios: {
    nodes: {
      id: number;
      name: string;
    }[];
  };
}

export interface IAnime {
  Page: {
    pageInfo: IPageInfo;
    media: IAnimeDetails[];
    __typename: string;
  };
}
