import React from 'react';
import CompanyLogo from './background.png';
import {Image, PageHeader} from "antd";

export const Footer = () => {
    return (
        < img className={"logo"}  alt={""} src={CompanyLogo} width={"15%"}/>
    );
}