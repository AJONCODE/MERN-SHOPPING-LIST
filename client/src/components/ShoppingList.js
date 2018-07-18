import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import uuid from "uuid";
// Whenever we have component properties, we should put them inside of prop-types,
// which basically is king of validation
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getItems, deleteItem } from "../actions/itemActions";

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    handleDeleteClick = (_id) => {
        this.props.deleteItem(_id);
    }

    /*
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                { _id: uuid(), name: "Manchester United Jersey"},
                { _id: uuid(), name: "Real Madrid Jersey"},
                { _id: uuid(), name: "Atletico United Jersey"},
                { _id: uuid(), name: "Bayern Munich Jersey"},
                { _id: uuid(), name: "Juventus Jersey"},
                { _id: uuid(), name: "Barcelona Jersey"},
                { _id: uuid(), name: "Liverpool Jersey"},
                { _id: uuid(), name: "Tottenham Hotspur Jersey"}
            ] 
        };
    }
    */
    /*
    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button
                    color="dark"
                    className="mb-4"
                    onClick={ () => { 
                        const name = prompt("Enter name"); 
                        if(name) {
                            this.setState( (state) => ({
                                items: [...state.items, { _id: uuid(), name }]
                            }) );
                        }
                    } }
                >Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { items.map(({ _id, name }) => (
                            <CSSTransition key={ _id } timeout={ 500 } classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={ () => {
                                            this.setState((state) => ({
                                                items: state.items.filter(item => item._id !== _id)
                                            }) );
                                        } }
                                        >&times;</Button>
                                    { name }
                                </ListGroupItem>
                            </CSSTransition>
                        )) }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
    */

   render() {
    const { items } = this.props.item; 
    return(
        <div>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    { items.map(({ _id, name }) => (
                        <CSSTransition key={ _id } timeout={ 500 } classNames="fade">
                            <ListGroupItem>
                                <Button 
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={ this.handleDeleteClick.bind(this, _id) }
                                    >&times;</Button>
                                { name }
                            </ListGroupItem>
                        </CSSTransition>
                    )) }
                </TransitionGroup>
            </ListGroup>
        </div>
    );
}
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item 
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem } 
)(ShoppingList);