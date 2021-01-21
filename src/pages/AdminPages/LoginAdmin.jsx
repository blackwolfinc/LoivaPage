import React from 'react'
import { MDBIcon } from 'mdbreact';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Style  from '../../assets/AdminAssets/cssModule/LoginAdmin.module.css'
export const LoginAdmin = () => {

    const history = useHistory();

    const LoginAction=  ()=>{
          useEffect(() => {
       
          history.push("/admin/home");
        
      }, [LoginAction]);
    
    }
    return (
        <div className={Style.containerLogin}>
            <form action={LoginAction}>
                <div className={Style.cardStyle}>
                    <div className="imgWraper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logo-equity-life.jpg/1200px-Logo-equity-life.jpg" alt=""/>
                    </div>
                    <div className={Style.inputWraper}>
                        <div className={Style.inputfrom}>
                        <MDBIcon className="fa-lg" icon="user" />
                            <input name="usrename" type="text" placeholder="Username"/>
                        </div>
                        <div className={Style.inputfrom}>
                        <MDBIcon className="fa-lg" icon="key" />
                        <input name="usrename" type="password" placeholder="Password"/>
                    </div>
                    </div>                    
            <button onClick={LoginAction} className="btn btn-success">Login</button>
                </div>
            </form>
            
        </div>
    )
}
