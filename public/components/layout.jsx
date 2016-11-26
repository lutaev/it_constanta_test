
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import store from '../js/store';
import Menu from './menu';
import List from './list';

export const Layout =  React.createClass ({

    getInitialState() {
        return {
            showMenu: false
        }
    },

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    },


    render() {
        let listClassName = this.state.showMenu ? 'col-xs-8' : 'col-xs-12';
        let menuClassName = this.state.showMenu ? 'col-xs-4 menu' : 'hidden';
        let menuText = this.state.showMenu ? 'Close menu' : 'Show menu';

        return (
            <div className="row">
                <div className={listClassName}>
                    <div id="list-container">
                        <List persons={this.props.persons}/>
                        <button className="btn btn-primary btn-sm" id="menu-button" onClick={this.toggleMenu}>{menuText}</button>
                    </div>
                </div>
                <div className={menuClassName}>
                    <Menu persons={this.props.persons} newText={this.props.newText}/>
                </div>
            </div>
        )
    }
});

export const LayoutConnected = connect(mapStateToProps)(Layout);

function mapStateToProps(state) {
    return state.toJS();
}


