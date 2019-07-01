import React from 'react';
import {connect} from 'react-redux';
import {addArticle, showDetail, deleteOne, deleteAll, reset_db} from '../actions';
import Item from "./Item";

// import axios from 'axios';


class List extends React.Component {


    render() {
        return (<div>

                <button onClick={() => this.props.deleteAll()}>Clear</button>
                <button onClick={() => {
                    this.props.reset_db();
                    // store.dispatch(reset_db());
                }}>reset
                </button>
                <ul>
                    {
                        this.props.msgs.map((el, index) => {
                            // console.log(el);
                            // console.log(index);
                            return <Item el={el} key={index}/>
                        })
                    }
                </ul>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        msgs: state.msgsPack
    }; //now it will appear as props
};

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: () => dispatch(addArticle()),
        showDetail: () => dispatch(showDetail()),
        deleteOne: () => dispatch(deleteOne()),
        deleteAll: () => dispatch(deleteAll()),
        reset_db: () => dispatch(reset_db())


        // postMessage: (url,data,method) => {
        //     dispatch(uploadData(url,data,method));
        // }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(List);
