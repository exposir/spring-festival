import axios from "./index";

export default {
    get(type = 1) {
        return axios.get({
            method: "baidu.ting.billboard.billList",
            type: type,
            size: 20,
            offset: 0
        });
    }
};