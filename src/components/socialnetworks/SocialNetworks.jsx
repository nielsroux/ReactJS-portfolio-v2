import React from 'react'
import './socialnetworks.scss'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

const SocialNetworks = () => {
    return (
        <div className='socialnetworks'>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://dribble.com" target="_blank" rel="noreferrer"><BsDribbble /></a>
        </div>
    );
};

export default SocialNetworks