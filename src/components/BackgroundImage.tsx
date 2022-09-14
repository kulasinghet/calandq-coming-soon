import React from 'react';
import Image from './background.webp';

export const BackgroundImage = () => {
    return (
        <div className={"background"}>
            <img src={Image} alt={"background"} className={"background__image"}/>
        </div>
    );
}