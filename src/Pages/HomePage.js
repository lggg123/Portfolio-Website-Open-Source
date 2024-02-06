import React from 'react';
import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as Instagram } from '../img/instagram.svg';
import { ReactComponent as Github } from '../img/github.svg';
import { ReactComponent as Twitter } from '../img/twitter.svg';
import { ReactComponent as TikTok } from '../img/tiktok.svg';
import { ReactComponent as Snapchat } from '../img/snapchat.svg';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="hero">
                <h1 className="hero-text">
                    Hello, I am 
                    <span> a Software Engineer</span>
                </h1>
                <p class="h-sub-text">After honing my expertise for over 5+ years, I excel in crafting dynamic websites either independently or collaboratively within Agile Scrum frameworks. 
                    My proficiency lies in seamlessly working with Ruby on Rails, Golang (Gin), PHP Laravel, NodeJS, ReactJS, VueJS, React Native, Solidity, and Typescript to bring concepts to life. From inception to deployment, 
                    I adeptly navigate the entire web development lifecycle, consistently delivering on client requirements within their proposed timelines. 
                    With a versatile background spanning various domains, I've successfully navigated diverse projects, excelling in e-commerce development within the Shopify ecosystem and showcasing robust proficiency in WordPress. 
                    My expertise extends to business applications, data science applications, IT solutions, government projects, HIPAA-compliant applications, and cryptocurrency endeavors.
                    In addition to my technical acumen, I bring a strategic entrepreneurial mindset to the table. Beyond website development, I actively contribute to digital marketing strategies, business startups, and blog creation, providing comprehensive support across diverse domains.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/codezforlife"className="icon-holder">
                        <Facebook className="icon fb"/>
                    </a>
                    <a href='https://www.github.com/lggg123/' className="icon-holder">
                       <Github className="icon gh"/>
                    </a>
                    <a href='https://www.instagram.com/georgealugo' className="icon-holder">
                        <Instagram className="icon ig"/>
                    </a>
                    <a href="https://www.twitter.com/glugo21"className="icon-holder">
                        <Twitter className="icon tw"/>
                    </a>
                    <a href='https://www.snapchat.com/add/glugo123/' className="icon-holder">
                        <Snapchat className="icon sp"/>
                    </a>
                    <a href="https://www.tiktok.com/@georgecodez" className="icon-holder">
                        <TikTok className="icon tt"/>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default HomePage