import axios from "axios";

// const API_KEY = process.env.REACT_APP_KEY;
const BASE_URL = "https://map.kakao.com/link/search";

export const getNewsData = async ( search ) => {
    const URL = (search) => `${BASE_URL}/${search}`;
    const resultObj = {};
    const result = await axios
        .get(URL(search))
        .then((res) => res.data.response.docs);
}
console.log(result)
// https://map.kakao.com/link/search/카카오
