import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Card">
                <div className="">
                    <img src={this.props.avatar} className="Card-img"/>
                    <p className="Card-text">{ this.props.first_name }</p>
                    <br/>
                    <p className="Card-text">{ this.props.last_name }</p>
                </div>
            </div>
        )
    }
} 

Card.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}


export default Card;