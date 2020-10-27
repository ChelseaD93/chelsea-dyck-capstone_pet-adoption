import React from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';
import animalPhoto from '../../assets/images/murphy.jpg';
import './notFound.scss';

class NotFound extends React.Component {

    //state to handle the visibility of the Pop-up window after form submission
    state = {
        visible: false,
    }

    
    //this will close the pop-up window and redirect to the main animals page
    //might not need this one since we are changing pages immediately
    closeModal(e) {
        e.preventDefault();
        this.setState({
            visible : false
        });
    }

    formSubmit(e) {
        e.preventDefault();
        //this will open a pop-up window after the submit to show submission received
        this.setState({
            visible : true
        });
    }
    render() {
        return (
            <div className="notFound">
                <h1 className="notFound__title">404 Error</h1>
                <h2 className="notFound__blurb">Page not found.</h2>
                <h2 className="notFound__blurb">Wanna look at cute animals instead?</h2>
                <div className="notFound__options">
                    <Link to="/adoptable-animals" className="notFound__options-link">
                        <button className="notFound__options-link-button">Yes, please!</button>
                    </Link>
                    <button onClick={(e) => this.formSubmit(e)}className="notFound__options-button">No, thanks!</button>
                </div>
                <Modal className="notFound__popup" visible={this.state.visible} effect="fadeInUp" onClickAway={(e) => this.closeModal(e)}>
                    <div className="notFound__popup-message">
                        <h1 className="notFound__popup-message-title">How could you say "no" to that face?</h1>
                        <img className="notFound__popup-message-photo" src={animalPhoto} alt="cute animal"/>
                        <Link to='/adoptable-animals' className="notFound__popup-message-close">
                            <button className="notFound__popup-message-close-button">Okay, I will go look at cute animals!</button>
                        </Link>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default NotFound;