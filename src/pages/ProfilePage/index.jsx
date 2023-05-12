//import "./ProfilePage.css";
import { useState, useEffect } from "react";
import ImageSelector from "../../components/ImageSelector";
import ColourChanger from "../../components/ColourChanger";
import FontColourChanger from "../../components/FontColorChanger";
import FontResize from "../../components/FontResize";
import { useTheme } from "../../contexts";
import Select from 'react-select'
import * as Constant from '../../constants'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("profileImage") || null
  );
  const { theme, setTheme, themes } = useTheme({})
  const [localColor, setLocalColor] = useState('');
  const [setFontColor] = useState('')
  const [fontSize, setFontSize] = useState('')
  const [username, SetUsername] = useState(localStorage.username)
  const [email, setEmail] = useState(localStorage.userEmail)
  const [txtPassword, setTxtPassword] = useState()
  const [currentPass, setCurrentPass] = useState()
  const [newPass, setNewPass] = useState()
  const [confirmPass, setConfirmPass] = useState()


  const handleImageSelect = (image) => {
    setSelectedImage(image);
    localStorage.setItem("profileImage", image);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    const savedFontColor = localStorage.getItem('fontColor')
    const savedFontSize = localStorage.getItem('fontSize')
    if (savedColor) {
      setLocalColor(savedColor);
    }
    if (savedFontColor) {
      handleFontColorChange(savedFontColor)
    }
    if (savedFontSize) {
      handleFontResize(Number(savedFontSize))
    }
  }, []);

  const handleBackgroundColorChange = (color) => {
    setLocalColor([localStorage.getItem('userTheme')]);
    localStorage.setItem("backgroundColor", color);
    localStorage.setItem('userTheme', color)
    setTheme(themes[color])
  }

  const handleFontColorChange = (color) => {
    setFontColor(color)
    localStorage.setItem('fontColor', color)
  }

  const handleFontResize = (size) => {
    setFontSize(size)
    localStorage.setItem('fontSize', size)
  }
  async function handleChangePassword() {

    if (newPass !== confirmPass) {
      toast.error("Confirm password did not match")
      return
    }
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentPassword: currentPass, newPassword: newPass
      }),
    };
    try {
      const resp = await fetch(Constant.MAIN_URl + `users/password/${localStorage.id}`, options);
      const data = await resp.json();
      console.log(data.message)
      toast.warning(data.message)
    } catch (e) {
      console.log(e)
    }


  }
  async function handleSubmit(e) {
    if (e.target.id === 'btnSubmit') {
      // e.preventDefault()
      updateUser()
      setTheme(themes[localStorage.getItem('userTheme')])
    }
    else {
      setTheme(themes[localColor])
    }

  }

  const updateUser = async () => {

    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json", "charset": "utf8" },
      body: JSON.stringify({
        password: `${txtPassword}`
      })
    }
    console.log(Constant.MAIN_URl + `users/password/${localStorage.id}`, options)
    const res = await fetch(Constant.MAIN_URl + `users/password/${localStorage.id}`, options)
    const passData = await res.json()

    if (passData.status) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": '*' },
        body: JSON.stringify({
          username: username, email: email
        }),
      };
      const resp = await fetch(Constant.MAIN_URl + `users/${localStorage.id}`, options);
      const data = await resp.json();
      localStorage.setItem("username", data.username)
      localStorage.setItem("userEmail", data.userEmail)
      toast.success(data.message)

    }

  }
  function handleInput(e) {
    e.preventDefault()
    if (e.target.id === 'usernameInput') {
      SetUsername(e.target.value)
    }
    else if (e.target.id === 'txtPassword') {
      setTxtPassword(e.target.value)
    }
    else if (e.target.id === 'CurrentPassword') {
      setCurrentPass(e.target.value)
    }
    else if (e.target.id === 'NewPassword') {
      setNewPass(e.target.value)
    }
    else if (e.target.id === 'ConfirmPassword') {
      setConfirmPass(e.target.value)
    }
    else {
      setEmail(e.target.value)
    }
  }
  return (

    <section>
      <div className="container mt-5">
        <div className="row justify-content-start">
          <div className="col-5 shadow rounded position-relative" style={{ backgroundColor: theme.secColor }}>
            <div className="m-5">
              <div className="card-body text-center ">
                <div className="mt-3 mb-4">
                  {selectedImage ? (
                    <img className="img-fluid" style={{ maxWidth: "128px", maxHeight: "128px" }}
                      src={selectedImage}
                      alt="Your Image"

                    />
                  ) : (
                    <img style={{ maxWidth: "128px", maxHeight: "128px" }}
                      src="https://img.icons8.com/bubbles/256/null/gender-neutral-user.png"
                      alt="Placeholder Image"
                      className="img-fluid"
                    />
                  )}
                  <div className="">
                    <ImageSelector
                      onSelect={handleImageSelect}
                      image1="https://img.icons8.com/color/256/null/user-male-circle--v1.png"
                      image2="https://img.icons8.com/bubbles/256/null/user-male-circle.png"
                      image3="https://img.icons8.com/color/256/null/user-female-circle--v1.png"
                      image4="https://img.icons8.com/clouds/256/null/user-female-circle.png"
                      image5="https://img.icons8.com/emoji/256/null/cat-emoji.png"
                      image6="https://img.icons8.com/emoji/256/null/smiling-cat-with-heart-eyes.png"
                      image7="https://img.icons8.com/bubbles/256/null/walrus.png"
                      image8="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/null/external-walrus-animal-flaticons-lineal-color-flat-icons-3.png"

                    />
                  </div>
                  {/* <button className="btn" style={{ backgroundColor: theme.accentColor }} onClick={handleImageSelect}>Edit Picture</button> */}

                </div>
                <h4 className="mb-2" style={{ color: theme.secText }}>{username}</h4>
                <p className="mb-4" style={{ color: theme.secText }}>{email}</p>
                <duv className='d-flex'>
                  <button type="" className="btn m-3" data-bs-toggle="modal" data-bs-target="#saveSettings" style={{ backgroundColor: theme.primColor, color: theme.secColor }}>Update Profile</button>
                  <button className="btn m-3" data-bs-toggle="modal" data-bs-target="#changePassword" style={{ backgroundColor: theme.primColor, color: theme.secColor }}>Change Password</button>
                  
                </duv>
              </div>
            </div>
          </div>
          
          <div className="col-4">
            <div className=""  style={{color: theme.primText }}>
              <h2>Account settings</h2>
              <ColourChanger onColorChange={handleBackgroundColorChange} />
              <FontResize onFontResize={handleFontResize} />
              <button type="" className="btn mb-3" style={{ backgroundColor: `${theme.secColor}`, color: `${theme.primColor}` }}>Save Settings</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="saveSettings" tabIndex="-1" aria-labelledby="saveSettingsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="saveSettingsLabel">Account Settings</h1>
              <button type="button" onClick={handleSubmit} id='btn-close' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="userNameInput" className="form-label">User name</label>
                <input onChange={handleInput} type="text" className="form-control" id="usernameInput" value={username}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input onChange={handleInput} className="form-control" type='email' id="emailInput" value={email}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input className="form-control" type='password' id="txtPassword" onChange={handleInput}></input>
              </div>

              <button onClick={handleSubmit} id='btnSubmit' type="submit" className="btn mb-3" data-bs-dismiss="modal" style={{ backgroundColor: `${theme.primColor}`, color: `${theme.secColor}` }}>submit</button>

            </div>

          </div>
        </div>
      </div>
      <div className="modal fade" id="changePassword" tabIndex="-1" aria-labelledby="changePasswordLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="changePasswordLabel">Change Password</h1>
              <button type="button" id='btn-close' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="CurrentPassword" className="form-label">Current Password</label>
                <input onChange={handleInput} type="password" className="form-control" id="CurrentPassword"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="NewPassword" className="form-label">New Password</label>
                <input onChange={handleInput} className="form-control" type='password' id="NewPassword"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                <input className="form-control" type='password' id="ConfirmPassword" onChange={handleInput}></input>
              </div>

              <button onClick={handleChangePassword} id='btnSubmitChangePassword' type="submit" className="btn mb-3" data-bs-dismiss="modal" style={{ backgroundColor: `${theme.primColor}`, color: `${theme.secColor}` }}>submit</button>

            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </section >
    
  );
}
