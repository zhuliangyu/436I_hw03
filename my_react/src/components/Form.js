import React from 'react';
import {connect} from 'react-redux';
import {addArticle} from '../actions';


class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    handleChange = (event) => {
        this.setState({msg: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addArticle(this.state.msg);
        this.setState({msg:''})
    };

    render() {
        return (<div>
                <h1 className="alert alert-primary">It is a form.</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        message:
                        <input type="text"
                               value={this.state.msg}
                               onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>


                {/*<button onClick={() => {*/}
                {/*    this.props.addArticle('asd3');*/}
                {/*    // console.log(this.props);*/}
                {/*}}>add msg</button>*/}

            </div>
        );
    }
}


// const mapStateToProps = (state) => { //name is by convention
//     console.log(state);
//     return {
//         msgs: state.msgsPack.msgs
//     }; //now it will appear as props
// };


export default connect(null, {addArticle})(Form);
