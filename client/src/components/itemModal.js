import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { connect } from "react-redux";
// import uuid from "uuid";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            name: ""
        }
    }

    toggle = () => {
        this.setState(
            { modal: !this.state.modal }
        );
    }

    handelChange = (event) => {
        this.setState(
            {
                [ event.target.name ]: event.target.value
            }
        );
    }
/*
    handleSubmit = (event) => {
        // Prevents form from submitting
        event.preventDefault();

        const newItem = {
            _id: uuid(),
            name: this.state.name
        };

        // Add item via addItem action
        this.props.addItem(newItem);

        // Close modal
        this.toggle();
    }
*/
    handleSubmit = (event) => {
        // Prevents form from submitting
        event.preventDefault();

        const newItem = {
            name: this.state.name
        };

        // Add item via addItem action
        this.props.addItem(newItem);

        // Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    className="mb-3"
                    onClick= { this.toggle }
                >Add Item</Button>

                <Modal
                    isOpen={ this.state.modal }
                    toggle={ this.toggle }
                >
                    <ModalHeader toggle={ this.toggle }>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={ this.handleSubmit }>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange= { this.handelChange }
                                />
                                <Button 
                                    color="dark"
                                    className="mt-2"
                                    block
                                    >
                                        Add
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>   
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { addItem }
)(ItemModal);