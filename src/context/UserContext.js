import { createContext } from "react";
import initialData from "../data/initial-data.json";

const UserContext = createContext({
   isLogged: false,
   pseudo: null,
   tweets: initialData.tweets
});

export default UserContext;