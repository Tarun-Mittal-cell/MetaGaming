import axios from "axios";
import { popularGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  
};
