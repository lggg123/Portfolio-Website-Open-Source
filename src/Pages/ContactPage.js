import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title0">
                <Title title={'Contact Info'} span={'Contact Info'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title="office_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04413523123!2d-118.74138070476894!3d34.020608462124834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1707172242534!5m2!1sen!2sus" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+1 (323) 283-9160'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'rails_dev@codengine.org'} title={'Email'} />
                    <ContactItem icon={location} text1={'Los Angeles, CA'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
