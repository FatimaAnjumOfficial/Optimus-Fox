import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const NftsContext = createContext();

export const useNfts = () => {
  return useContext(NftsContext);
};

export const NtfsProvider = () => {
  const [nfts, setNfts] = useState(() => {
    const localData = localStorage.getItem("nfts");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("nfts", JSON.stringify(nfts));
  }, [nfts]);

  const toggleNfts = (nfts) => {
    setNfts((prevNfts) => {
      if (prevNfts.some((nft) => nft.id === nfts.id)) {
        return prevNfts.filter((nft) => nft.id !== nfts.id);
      } else {
        return [...prevNfts, nfts];
      }
    });
  };

  return (
    <div>
      <NftsContext.Provider value={{ nfts, toggleNfts }}>
        {children}
      </NftsContext.Provider>
    </div>
  );
};
