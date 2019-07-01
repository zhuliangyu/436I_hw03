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
    return function (dispatch) {
        return axios.get('http://localhost:3000/msgs')
            .then(res => {
                const msgs = res.data;
                dispatch(loadSuccess(msgs));
            })
    };
};

export const reset_db = () => {
    return function (dispatch) {
        return axios.get('http://localhost:3000/msgs/reset')
            .then(res => {
                const msgs = res.data;
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

export const addArticle = (msg_value) => {
    return function (dispatch) {
        return axios.post('http://localhost:3000/msgs/',{msg: msg_value})
            .then(res => {
                const new_msg = res.data;
                dispatch(addSuccess(new_msg));
            })
    };
};


export const addSuccess = (msg) => {
    return {
        type: "ADD_SUCCESS",
        payload: msg
    }
};

export const deleteOne = (_id) => {
    return function (dispatch) {
        return axios.delete('http://localhost:3000/msgs/' + _id)
            .then(res => {
                const _id = res.data;
                dispatch(deleteSuccess(_id));
            })
    };
};

export const deleteSuccess = (payload) => {
    return {
        type: "DELETE_SUCCESS",
        payload
    }
};

export const edit = (_id, msg) => {
    return function (dispatch) {
        return axios.put('http://localhost:3000/msgs/' + _id, msg)
            .then(res => {
                const new_msg = res.data;
                // console.log(new_msg)
                dispatch(editSuccess(new_msg));
            })
    };
};

export const editSuccess = (payload) => {
    return {
        type: "EDIT_SUCCESS",
        payload
    }
};


export const showDetail = (payload) => {
    return {
        type: "SHOW_DETAIL",
        payload
    }
};







export const deleteAll = (payload) => {
    return {
        type: "DELETE_ALL",
        payload
    }
};

