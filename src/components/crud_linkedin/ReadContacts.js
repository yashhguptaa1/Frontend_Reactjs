import React, { Component } from 'react';
import SingleContact from './SingleContact';
import CreateContacts from './CreateContact';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/contacts')
        .then(response => response.json())
        .then(data => this.setState({contacts: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <CreateContacts />
                </div>
                <div className="row">
                    { this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}
