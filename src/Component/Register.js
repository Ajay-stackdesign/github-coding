import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Register.scss"
import google from "../assest/google.svg"
import linkedin from "../assest/linkedin.svg"
import face from "../assest/face.svg"
import profile from "../assest/profilePage.svg"
import axios from "axios"

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState()
    const [gender, setGender] = useState("")
    const [image, setImage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        // const config = { headers: { "Content-Type": "application/json" } }
        // axios.post("https://localhost:3000/add-regiser", { firstName, lastName, email, phoneNo, gender, image }, config)
        console.log(image)
        console.log(gender)
    }

    const googleApi = () => {

    }
    const facebookApi = () => {

    }
    const linkedinApi = () => {

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result);
            }
        };
    }

    return (
        <div className="register__form">
            <div className='register__header'>
                <h3><center>Create Account</center></h3>
                <h4><center>Hello SignUp! to get started</center></h4>
            </div>
            <div className='register__candidate'>
                <h3>Candidate</h3>
                <h3>Employer</h3>
            </div>
            <div>
                <img src={profile} alt="profile images" />
            </div>
            <div className='register__formSubmit'>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label htmlFor="file-input">
                        <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png" alt='Profile__image' />
                    </label>
                    <input id="file-input" type="file" accept='image*/' onChange={handleImageChange} />
                    <input type="text" required placeholder='First Name *' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" required placeholder='Last Name *' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type="email" required placeholder='youremail@domain.com *' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="number" placeholder='Mobile no' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                    <label>Gender*</label>
                    <select className='selcct__value' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option className='option__label' value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>

                    <button type='submmit'>Register</button>
                </form>
            </div>
            <div>
                <p>- Or sign With -</p>
            </div>
            <div className='register__icon'>
                <img src={google} alt="Google_icon" onClick={googleApi} />
                <img src={face} alt="Google_icon" onClick={facebookApi} />
                <img src={linkedin} alt="Linkedin_icon" onClick={linkedinApi} />
            </div>
            <div className='register__Account'>
                <p>Already have An Account</p>
                <Link to="/">Sign In</Link>
            </div>

            <div className='register__privacy'>
                <Link to="/">Privacy Policy.</Link>|
                <Link to="/">Terms & Conditions</Link>
            </div>
            <p>All right reserved to Hoby johy inc @2021</p>
        </div>
    )
}

export default Register