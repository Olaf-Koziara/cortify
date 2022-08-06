import React from 'react';
import "./MainTemplate.scss"
import Header from "../../Layouts/Header/Header";

interface mainTemplateProps {
    children: JSX.Element
}

const MainTemplate = ({children}: mainTemplateProps) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default MainTemplate;