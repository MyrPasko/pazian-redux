import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import User from "../components/User";
import Page from "../components/Page";
import * as pageActions from '../actions/PageActions';

class App extends Component {
    render() {
        const {user, page} = this.props;
        const { setYear, getPhotos } = this.props.pageActions;
        return (
            <div className="row">
                <Page
                    year={page.year}
                    photos={page.photos}
                    setYear={setYear}
                    getPhotos={getPhotos}
                    fetching={page.fetching}
                />
                <User name={user.name}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);