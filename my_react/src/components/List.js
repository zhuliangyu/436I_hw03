import React from 'react';
import {connect} from 'react-redux';
import {addArticle, showDetail,deleteOne, deleteAll} from '../actions';
import Item from "./Item";
// import axios from 'axios';


class List extends React.Component {


    render() {
        return (<div>

                <button onClick={()=> this.props.deleteAll()}>Clear</button>
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


export default connect(mapStateToProps, {addArticle, showDetail,deleteOne, deleteAll})(List);
