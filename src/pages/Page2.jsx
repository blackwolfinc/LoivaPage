import React from 'react'
import { LoginFrom } from '../components/Global/Login/Login'
import { MassageBoxFrom } from '../components/Global/MassageBox/MassageBox'
import { RegisterFrom } from '../components/Global/Register/Register'
import { FooterV1 } from '../components/User/Footer/FootV1/FooterV1'
import NavbarV2 from '../components/User/header/Navbar/NavbarV2/NavbarV2'


export const Page2 = () => {
    return (
        <div>
            <NavbarV2/>
            <LoginFrom/>
            <RegisterFrom/>
            <MassageBoxFrom/>
            <FooterV1/>
        </div>
    )
}
