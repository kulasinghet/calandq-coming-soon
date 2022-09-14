import React from 'react';
import CalandQLogo from './CalandQLogo.png';
import {Image, PageHeader} from "antd";

export const Header = () => {
    return (
        < img className={"CalandQlogo"}  alt={""} src={CalandQLogo} width={"20%"}/>
    );
}