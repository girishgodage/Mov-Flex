import { GET_NOW_PLAYING_MOVIES } from "../types";
import { url_movie, API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const getnowplayingMovies = () => dispatch => {
  dispatch(itemsLoading(true));
  axios
    .get(`${url_movie}/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
    .then((res) => {
      dispatch(itemsLoading(false));
      dispatch({
        type: GET_NOW_PLAYING_MOVIES,
        payload: res.data.results.slice(0, 8)
      });
    })
};
