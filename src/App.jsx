import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { PrivatePages } from "./RegPages/PrivatePages";
import { PublicPages } from "./RegPages/PublicPages";

export const App = () => {
  const { IsAuth } = useContext(AuthContext);
  return <div>{IsAuth ? <PrivatePages /> : <PublicPages />}</div>;
};
