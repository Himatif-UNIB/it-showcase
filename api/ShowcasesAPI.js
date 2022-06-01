import axios from "../config";

const getShowcases = async (url) => {
    return await axios.get(url);
};

export { getShowcases };
