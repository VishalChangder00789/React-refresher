import React from "react";
import './SignIn.css';

import LeftImage from  '../../asset/leftpanelImage.png'
import MIlogo from '../../asset/mi_logo.png'
import Input from "../../Components/Inputs/Input";

const SignIn = () =>{

    return(
        <div className="WholePageContainer">
            <div className="LeftPartContainer">
            <img src={LeftImage}/>
            </div>
            <div className="RightPartContainer">
                <div className="NavbarContainer">
                    <div className="LeftPartNavbar">
                        <img src={MIlogo}/>
                        <div>Xiaomi Account</div>
                    </div>
                    <div className="RightPartNavbar">User agrenent blah blah</div>
                </div>


                <div className="FormContainer">
                    <div className="FormHolder">
                        <Input type="text" placeholder="Enter your name"/>
                        <Input type="password" placeholder="Enter your password"/>
                    </div>
                </div>
            </div>
        </div>
    );

};


export default SignIn;