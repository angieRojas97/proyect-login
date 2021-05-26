import React, {Component} from 'react';
import Reflux from 'reflux';
import '../styles/Home.css';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import Card from '../components/Card';

class Home extends Reflux.Component {
    constructor(){
        super();

        this.state = {};
        this.store = AppStore;
        this.storeKeys = ['data'];
        this.showUsers = this.showUsers.bind(this);
    }

    showUsers(e){
        Actions.getUsers();
    }

    render(){
        let users = this.state.data.map((currentValue, index, array) => {
            return(
                <Card 
                key={index}
                id={currentValue.id}
                first_name={currentValue.first_name}
                last_name={currentValue.last_name}
                avatar={currentValue.avatar}
                />
            );
        })
        return(
            <div className="Home">
                <div className="Home-header-box">
                    <h2 className="Home-header-title">Welcome!</h2>
                    <button className="Home-header-button" onClick={this.showUsers}>Show Users</button>
                </div>
                <div className="Home-body">
                    {users}
                </div>
            </div>
        )
    }
}

export default Home;