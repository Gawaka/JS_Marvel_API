import axios from "axios";
import { API_KEY, API_URL, URL_COMICS, URL_CHARACTERS} from '../constants/const.js';

class GetDataApi {
    async getData(API_URL) {
        const response = await axios.get(API_URL, {
            params: {
                apikey: API_KEY,
                limit: 100,
            },
        });
        // console.log(API_URL);

        return response.data.data.results;
    }
}

export const getDataApi = new GetDataApi();