import React from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';
import './login.scss';

class Login extends React.Component {
    
    state = {
        visible: false,
    }

    //this will open a pop-up window after the submit to show submission received
    openModal(e) {
        e.preventDefault();
        this.setState({
            visible : true
        });
    }
    
    //this will close the pop-up window and redirect to the main animals page
    //might not need this one since we are changing pages immediately
    closeModal(e) {
        e.preventDefault();
        this.setState({
            visible : false
        });
    }

    //this is to reset the form to the default disabled values when the use hits the cancel button the on the form
    hardReset(e) {
        e.preventDefault();
        document.forms["form"].reset();
        document.querySelector(".login__form-fillable-animal-select-input").setAttribute("disabled","disabled");
        document.querySelector(".login__form-fillable-age-select-input").setAttribute("disabled","disabled");
        document.querySelector(".login__form-fillable-size-select-input").setAttribute("disabled","disabled");
    }

    //axios call to send the information to the backend adopter table

    render() {
        return (
            <div className='login'>
                <div className="login__hero">
                    <h1 className="login__hero-title">Sign Up Today!</h1>
                </div>
                <h2 className="login__title">Fill out the following form to start receiving emails when adoption opportunities are posted:</h2>
                <div className="login__form">
                    <form name="form" className="login__form-fillable">
                        <div className="login__form-fillable-dynamic">
                            <div className="login__form-fillable-personal">
                                <div className="login__form-fillable-section">
                                    <label htmlFor="firstName" className="login__form-fillable-section-label">First Name</label>
                                    <input type="text" name='firstName' id='firstName' className="login__form-fillable-section-input" placeholder='First Name'/>
                                </div>    
                                <div className="login__form-fillable-section">
                                    <label htmlFor="lastName" className="login__form-fillable-section-label">Last Name</label>
                                    <input type="text" name='lastName' id='lastName' className="login__form-fillable-section-input" placeholder='Last Name'/>
                                </div>    
                                <div className="login__form-fillable-section">
                                    <label htmlFor="email" className="login__form-fillable-section-label">Email</label>
                                    <input type="text" name='email' id='email' className="login__form-fillable-section-input" placeholder='jdoe@email.com'/>
                                </div>
                            </div>
                            <div className="login__form-fillable-preferences">
                                <div className="login__form-fillable-animal">
                                    <p className="login__form-fillable-animal-title">What animal are you looking to adopt?</p>
                                    <select name="animal" className="login__form-fillable-animal-select">
                                        <option  value='' selected disabled className="login__form-fillable-animal-select-input" >--Select One--</option>
                                        <option  value='Cat' className="login__form-fillable-animal-select-input" >Cat</option>
                                        <option  value='Dog' className="login__form-fillable-animal-select-input" >Dog</option>
                                        <option  value='Critter' className="login__form-fillable-animal-select-input" >Other Animal</option>
                                    </select>
                                </div>
                                <div className="login__form-fillable-age">
                                    <p className="login__form-fillable-age-title">What age are you looking for?</p>
                                    <select name="animal" className="login__form-fillable-age-select">
                                        <option  value='' selected disabled className="login__form-fillable-age-select-input" >--Select One--</option>
                                        <option  value='Baby' className="login__form-fillable-age-select-input" >Baby</option>
                                        <option  value='Young' className="login__form-fillable-age-select-input" >Young</option>
                                        <option  value='Adult' className="login__form-fillable-age-select-input" >Adult</option>
                                        <option  value='Senior' className="login__form-fillable-age-select-input" >Senior</option>
                                    </select>
                                </div>
                                <div className="login__form-fillable-size">
                                    <p className="login__form-fillable-size-title">What adult size do you want?</p>
                                    <select name="animal" className="login__form-fillable-size-select">
                                        <option  value='' selected disabled className="login__form-fillable-size-select-input" >--Select One--</option>
                                        <option  value='Small' className="login__form-fillable-size-select-input" >Small</option>
                                        <option  value='Medium' className="login__form-fillable-size-select-input" >Medium</option>
                                        <option  value='Large' className="login__form-fillable-size-select-input" >Large</option>
                                        <option  value='Extra Large' className="login__form-fillable-size-select-input" >Extra Large</option>
                                    </select>
                                </div>
                            </div>
                        </div>                    
                        <div className="login__form-fillable-button">
                            <button className="login__form-fillable-button-submit" onClick={(e) => this.openModal(e)}>Submit</button>  
                            <button onclick={(e) => this.hardReset(e)} className="login__form-fillable-button-cancel">Cancel</button> 
                        </div>                                     
                    </form>
                </div>
                <Modal className="login__popup" visible={this.state.visible} effect="fadeInUp" onClickAway={(e) => this.closeModal(e)}>
                    <div className="login__popup-message">
                        <div className="login__popup-message-top">
                            <h1 className="login__popup-message-top-title">Signed Up Successfully!</h1>
                            <h2 className="login__popup-message-top-blurb">Thank you for choosing our service.</h2>
                        </div>
                        <div className="login__popup-message-instructions">
                            <h3 className="login__popup-message-instructions-title">Next Steps:</h3>
                            <ol className="login__popup-message-instructions-next">
                                <li className="login__popup-message-instructions-next-step">Check your email for our welcome message.</li>
                                <li className="login__popup-message-instructions-next-step">Add our email to your safe senders list.</li>
                                <li className="login__popup-message-instructions-next-step">Keep and eye out for emails to come when new adoption postings that match your criteria.</li>
                                <li className="login__popup-message-instructions-next-step">Follow the links to visit the original posting and apply to adopt.</li>
                            </ol>
                        </div>                    
                        <h2 className="login__popup-message-luck">Good Luck!</h2>
                        <Link to='/adoptable-animals' className="login__popup-message-close">
                            <button className="login__popup-message-close-button">Close</button>
                        </Link>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Login;