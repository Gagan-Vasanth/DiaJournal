import React, { Component } from 'react';
import Parser from 'html-react-parser';
import './Card.css';

export class Card extends Component {
    
    render() {
        return (
            <div className="card_container">
                <p className="card_date">{this.props.date}</p>
                <div className="card_body">{Parser(this.props.journal)}</div>
            </div>
        )
    }
}

export default Card


