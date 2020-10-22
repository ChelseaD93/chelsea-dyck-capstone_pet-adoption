import React from 'react';
import './about.scss';

function About() {
    return (
        <div className='about'>
            <div className="about__hero">
                <h1 className="about__hero-title">About Us</h1>
            </div>     
            <div className="about__mission">
                <h2 className="about__mission-title">Our Mission</h2>
                <p className="about__mission-blurb">It is our mission to help those who are eager to adopt a new pet into their family.</p>
                <p className="about__mission-blurb">To provide a tracking service that notifies adopters of potential opportunities for adoption as they come up to remove the need to constantly monitor the adoption agency websites for new postings.</p>
                <p className="about__mission-blurb">To provide a reliable service that allows people to keep their schedules while still knowing they will have a chance to apply for an adoption as soon as an agency updates their postings</p>
            </div>
            <div className="about__process">
                <h2 className="about__process-title">The Process</h2>
                <ol className="about__process-steps">
                    <li className="about__process-steps-item">Sign up for our email notifications.</li>
                    <li className="about__process-steps-item">Select what animals and categories you are interested in receiving notifications for.</li>
                    <li className="about__process-steps-item">Keep and eye out for our welcome email to add it to your safe-senders list.</li>
                    <li className="about__process-steps-item">Wait for emails to come through whenever an animal is posted that matches your criteria.</li>
                    <li className="about__process-steps-item">Follow the link in the email or on our website to the agency's page to complete your adopter profile ASAP to get your name in the queue!</li>
                    <li className="about__process-steps-item">Good Luck! Hopefully you will find out you are going to add a new member to your family!</li>
                </ol>
            </div>       
        </div>
    );
}

export default About;