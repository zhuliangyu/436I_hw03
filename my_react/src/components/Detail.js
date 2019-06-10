import React from 'react';
import {connect} from 'react-redux';

class Detail extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Detail</h1>
                <h3>{this.props.local_detail}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //name is by convention
    return {
        local_detail: state.my_detail
    };
};

export default connect(mapStateToProps)(Detail);