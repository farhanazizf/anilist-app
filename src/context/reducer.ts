import React from "react";
import { getStorageValue, setStorageValue } from "../utils/local-storage";
import { ICollection } from "./types";

const CollectionContext = (collection?: ICollection) => {
  const checkPersist = getStorageValue("collection", []);
  const [collections, setCollections] =
    React.useState<ICollection[]>(checkPersist);

  const addCollection = (collection: ICollection) => {
    const checkSame = collections.filter(
      (val) =>
        val.id === collection?.id &&
        val.title.romaji === collection?.title.romaji
    );
    if (collection && checkSame.length === 0) {
      setCollections([...collections, collection]);
      setStorageValue("collection", [...collections, collection], collections);
    }
  };

  const removeCollection = (collection: ICollection) => {
    const removeChoosen = collections.filter((val) => val.id !== collection.id);
    if (collection) {
      setCollections(removeChoosen);
      setStorageValue("collection", removeChoosen, collections);
    }
  };

  return { collections, addCollection, removeCollection };
};

export default CollectionContext;
