import React from 'react';
import './login.scss';

function Login() {
    

    return (
        <div className='login'>
            <div className="login__hero">
                <h1 className="login__hero-title">Sign Up Today!</h1>
            </div>
            <h2 className="login__title">Fill out the following form to start receiving emails when adoption opportunities are posted:</h2>
            <div className="login__form">
                <form action="" className="login__form-fillable">
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
                                    <option  value='' selected disabled hidden className="login__form-fillable-animal-select-input" >--Select One--</option>
                                    <option  value='Cat' className="login__form-fillable-animal-select-input" >Cat</option>
                                    <option  value='Dog' className="login__form-fillable-animal-select-input" >Dog</option>
                                    <option  value='Critter' className="login__form-fillable-animal-select-input" >Other Animal</option>
                                </select>
                            </div>
                            <div className="login__form-fillable-age">
                                <p className="login__form-fillable-age-title">What age are you looking for?</p>
                                <select name="animal" className="login__form-fillable-age-select">
                                    <option  value='' selected disabled hidden className="login__form-fillable-age-select-input" >--Select One--</option>
                                    <option  value='Baby' className="login__form-fillable-age-select-input" >Baby</option>
                                    <option  value='Young' className="login__form-fillable-age-select-input" >Young</option>
                                    <option  value='Adult' className="login__form-fillable-age-select-input" >Adult</option>
                                    <option  value='Senior' className="login__form-fillable-age-select-input" >Senior</option>
                                </select>
                            </div>
                            <div className="login__form-fillable-size">
                                <p className="login__form-fillable-size-title">What adult size do you want?</p>
                                <select name="animal" className="login__form-fillable-size-select">
                                    <option  value='' selected disabled hidden className="login__form-fillable-size-select-input" >--Select One--</option>
                                    <option  value='Small' className="login__form-fillable-size-select-input" >Small</option>
                                    <option  value='Medium' className="login__form-fillable-size-select-input" >Medium</option>
                                    <option  value='Large' className="login__form-fillable-size-select-input" >Large</option>
                                    <option  value='Extra Large' className="login__form-fillable-size-select-input" >Extra Large</option>
                                </select>
                            </div>
                        </div>
                    </div>                    
                    <div className="login__form-fillable-button">
                        <button className="login__form-fillable-button-submit">Submit</button>  
                        <button type='reset' className="login__form-fillable-button-cancel">Cancel</button> 
                    </div>                                     
                </form>
            </div>
        </div>
    );
}

export default Login;