import React from 'react';
import {Button} from "antd";


export const MainContent = () => {
    return (
        <div className="main-content">
            <div className="main-content__text">
                <h1 className="main-content__text__title">Scheduling Soon</h1>
                <p className="main-content__text__description">CalandQ is under construction, please contact Commercializer for more info</p>
                < Button type="primary" size="large" className="main-content__text__button" href={"https://www.commercialtp.com/"}>Contact Commercializer</Button>
            </div>
        </div>
    );
}