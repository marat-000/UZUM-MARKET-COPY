import { createContext, useState, useEffect } from "react";

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem("likes"));

  const [like, setLike] = useState(storage || []);

  const getLikeData = (data) => {
    const isExist = like.some((v) => v.id === data.id);
    if (!isExist) {
      setLike((prevLike) => [...prevLike, data]);
    } else {
      onDelete(data.id);
    }
  };

  const onDelete = (id) => {
    const newData = like.filter((v) => v.id !== id);
    setLike(newData);
  };

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(like));
  }, [like]);

  return (
    <LikeContext.Provider value={{ onDelete, like, getLikeData }}>
      {children}
    </LikeContext.Provider>
  );
};
