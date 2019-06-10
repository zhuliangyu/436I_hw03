// export const increment = () => {
//     return {
//         type: 'INCREMENT_COUNTER'
//     };
// };

//Actions

import axios from 'axios';


export const increment = (amount) => {
    return {
        type: 'INCREMENT_COUNTER',
        payload: amount
    };
};

export const fetchAll = () => {
    return function(dispatch) {
        return axios.get('http://localhost:3000/msgs')
            .then(res => {
                const msgs = res.data;
                // console.log(msgs);
                dispatch(loadSuccess(msgs));
            })
    };
};

export const loadSuccess = (payload) => {
    return {
        type: "LOAD_SUCCESS",
        payload
    }
};

export const addArticle = (msg) => {
    return {
        type: "ADD_ARTICLE",
        payload: msg
    }
};

export const showDetail = (payload) => {
    return {
        type: "SHOW_DETAIL",
        payload
    }
};

export const deleteOne = (payload) => {
    return {
        type: "DELETE_ONE",
        payload
    }
};

export const deleteAll = (payload) => {
    return {
        type: "DELETE_ALL",
        payload
    }
};

export const edit = (payload) => {
    return {
        type: "EDIT",
        payload
    }
};