import React from 'react';
import {connect} from 'react-redux';
import {showDetail,deleteOne,edit} from '../actions';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_edit: false,
        }
    }


    render() {
        if (this.state.is_edit){
            console.log(this.props.el);

            return (

                <li key={this.props.index}
                    id = {this.props.el.id}>
                    id : {this.props.el.id} &amp;
                    msg :<input ref='myInput'
                                type="text"
                                defaultValue={this.props.el.msg }/>

                <button onClick={() => {
                    this.setState({is_edit: false});
                    let inputValue = this.refs.myInput.value;
                    // console.log(inputValue);
                    let new_item = { id: this.props.el.id,
                        msg: inputValue};
                    // console.log(new_item);
                    this.props.edit(new_item);


                }}>Save</button>
                </li>
            );

        } else {
            return (
                <li key={this.props.index}
                    id = {this.props.el.id}>
                    id : {this.props.el.id} &amp;
                    msg : {this.props.el.msg}
                    <button onClick={() => this.props.showDetail(this.props.el.msg)}>Detail</button>
                    <button onClick={() => this.props.deleteOne(this.props.el.id)}>Delete</button>
                    <button onClick={() => this.setState({is_edit: true})}>Edit</button>
                </li>);
        }

    }
}

const mapStateToProps = (state) => {
    return {
        msgs: state.msgsPack
    }; //now it will appear as props
};


export default connect(mapStateToProps, {showDetail,deleteOne,edit })(Item);
