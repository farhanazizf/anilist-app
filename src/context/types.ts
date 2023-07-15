export interface ICollection {
  id: number;
  title: {
    romaji: string;
    native: string;
  };
  genres: string[];
  image: string;
  collectionName: string;
}

export interface IContext {
  collections: ICollection[];
  onSelectCollection: (collection: ICollection) => void;
  onRemoveCollection: (collection: ICollection) => void;
}
