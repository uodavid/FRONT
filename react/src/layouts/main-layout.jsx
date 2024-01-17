import React from 'react';
import HeaderComponent from "../shared/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return(
        <>
        {/* Header*/}

        <HeaderComponent/>

        {/* Body*/}

        <Outlet/>

        {/* Footer*/}
        
        <FooterComponent/>
        </>
    )
}

export default MainLayout;