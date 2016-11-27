
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
        let menuClassName = this.state.showMenu ? '' : 'hidden';
        let menuText = this.state.showMenu ? 'Close menu' : 'Show menu';

        return (
            <div id="container">
                <div id="list-container" className={listClassName}>
                    <List persons={this.props.persons}/>
                    <button id="menu-button" onClick={this.toggleMenu}>{menuText}</button>
                </div>
                <div id="menu-container" className={menuClassName}>
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


