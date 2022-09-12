import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addsearch } from "./../store/store";

// const API_KEY = process.env.REACT_APP_KEY;
const BASE_URL = "https://map.kakao.com/link/search";

let search = useSelector((state) => state.search );
console.log(search);
let dispatch = useDispatch();

export const getNewsData = async ( search ) => {
    const URL = (search) => `${BASE_URL}/${search}`;
    // const resultObj = {};
    const result = await axios
        .get(URL(search))
        .then((res) => res.data.response.docs);
}
console.log(result)
// https://map.kakao.com/link/search/카카오
