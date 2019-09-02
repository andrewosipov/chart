import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getLoadingState,
    getOsState,
    getCurrentThemeState,
    getDataState,
} from './selectors';
import { fetchData } from '../redux/actions/data';
import Screen from '../views/screen';

class ScreenContainer extends Component {
    componentDidMount = async () => {
        await this.props.fetchData();
    }

    render () {
        return (
            <Screen {...this.props} />
        );
    }
}

export default connect(
    state => ({
        isLoading: getLoadingState(state),
        os: getOsState(state),
        currentTheme: getCurrentThemeState(state),
        data: getDataState(state),
    }),
    dispatch => ({
        fetchData: () => dispatch(fetchData()),
    }),
)(ScreenContainer);
