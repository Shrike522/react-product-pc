import { SET_KEY_WORDS } from './actionTypes';

import { productList } from '../../assets/data';

// reducer

export const reducerSetKeywords = (state, action) => {
    const newKeywords = Object.assign({}, state.keywords, action.payload),
        { productRootList } = state;
    const productList = productRootList.filter((item) => {
        let flag = true;
        for (let key of Object.keys(newKeywords)) {
            const keyword = newKeywords[key],
                itemValue = item[key];
            if (keyword) {
                if (typeof keyword === "string" && keyword !== itemValue) flag = false;
                if (Array.isArray(keyword) && !keyword.includes(itemValue)) flag = false;
            }
        }
        if (flag) return item;
    });
    return ({
        ...state,
        productList,
        keywords: newKeywords
    });
};

const handleReducers = {
    [SET_KEY_WORDS]: reducerSetKeywords
};

const searchList = {
    "brand": {
        title: "品牌",
        filter: [ "华硕", "技嘉", "微星", "迪兰", "蓝宝石" ]
    },
    "GPU": {
        title: "显卡芯片",
        classifyNames: [ "NVIDIA", "AMD" ],
        filter: [
            {
                total: "NVIDIA",
                classify: [ "RTX 2080ti", "RTX 2080", "RTX 2070", "GTX 1080ti", "GTX 1080", "GTX 1070ti", "GTX 1070", "GTX 1060" ]
            },
            {
                total: "AMD",
                classify: [ "RX 580", "RX 570" ]
            }
        ]
    },
    "memoryType": {
        title: "显存类型",
        filter: [ "GDDR6", "GDDR5X", "GDDR5" ]
    },
    "memorySize": {
        title: "显存容量",
        filter: [ "11GB", "8GB", "6GB", "4GB" ]
    },
    "memoryBit": {
        title: "显存位宽",
        filter: [ "352bit", "256bit", "192bit" ]
    },
};

const initState = {
    searchList,
    productRootList: productList,
    productList,
    keywords: {}
};

export default function (state = initState, action) {
    const handle = handleReducers[action.type];
    return handle ? handle(state, action) : state;
}
