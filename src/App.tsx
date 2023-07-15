import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import GlobalContext from "./context/global-context";
import theme from "./theme";
import client from "./client";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Details";
import CollectionContext from "./context/reducer";
import MyCollection from "./pages/MyCollection";

const App: React.FC = () => {
  const { collections, addCollection, removeCollection } = CollectionContext();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider
          value={{
            collections,
            onSelectCollection: addCollection,
            onRemoveCollection: removeCollection,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/anime" element={<Homepage />} />
              <Route path="/anime/:id" element={<Detail />} />
              <Route path="/anime/:id/:collection" element={<Detail />} />
              <Route path="/my-collection" element={<MyCollection />} />
              <Route path="/" element={<Navigate to="/anime" />} />
              <Route path="*" element={<Navigate to="/anime" />} />
            </Routes>
          </BrowserRouter>
        </GlobalContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
