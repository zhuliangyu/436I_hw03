// const counterReducer = (count = 0, action) => {
//
//     //initializing begin state count = 0
//
//     if (action.type === 'INCREMENT_COUNTER') {
//         return count + 1;
//     }
//     return count;
// };

import {combineReducers} from 'redux';
import axios from 'axios';


const initialState = [
    // {
    //     id: 1,
    //     msg: "asd1"
    // },
    // {
    //     id: 2,
    //     msg: "asd2"
    // },
    // {
    //     id: 3,
    //     msg: "asd3"
    // }
];

const addReducer = (state = initialState, action) => {
    if (action.type === "ADD_SUCCESS") {
        //immutable array
        // const new_msg = action.payload;

        let new_state = [...state, action.payload];

        return new_state;

    } else if (action.type === "DELETE_SUCCESS") {
        // console.log("before delete");
        // console.log(state);

        const id = action.payload;
        // console.log(id);

        const new_state = state.filter((ele) => {
            // console.log(ele);
            // console.log(ele.id !== id);
            return ele._id !== id
        });

        // console.log("after delete");
        // console.log(new_state);

        return new_state;

    } else if (action.type === 'DELETE_ALL') {
        axios.delete('https://message-express.herokuapp.com/msgs/all');
        return [];


    } else if (action.type === "EDIT_SUCCESS") {

        //{id: 3, msg:'asdasd'}
        const edit_item = action.payload;
        let new_state = state.map((ele) => {
            if (ele._id === edit_item._id) {
                ele.msg = edit_item.msg;
            }
            return ele;
        });

        // console.log(new_state);
        return new_state;

    } else if (action.type === 'LOAD_SUCCESS') {
        let new_state = action.payload;
        return [...state, ...new_state];

    } else {
        return state;
    }

};


const detailReducer = (state = '', action) => {
    if (action.type === "SHOW_DETAIL") {

        const new_state = action.payload;
        // const new_state = {
        //     detail: new_msg
        // };

        return new_state;

    } else {
        return state;
    }

};


const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.payload;
    }
    return count;
};


//reducer export the state
export default combineReducers({
    count: counterReducer,
    msgsPack: addReducer,
    my_detail: detailReducer
});
