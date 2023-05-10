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
  console.log('----->>>>>', localStorage)
  const { theme } = useTheme()
  const [backgroundColor, setBackgroundColor] = useState('');
  const [fontColor, setFontColor] = useState('')
  const [fontSize, setFontSize] = useState('')
  const [username, SetUsername] = useState(localStorage.username)
  const [email, setEmail] = useState(localStorage.userEmail)

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    localStorage.setItem("profileImage", image);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    const savedFontColor = localStorage.getItem('fontColor')
    const savedFontSize = localStorage.getItem('fontSize')
    if (savedColor) {
      setBackgroundColor(savedColor);
    }
    if (savedFontColor) {
      handleFontColorChange(savedFontColor)
    }
    if (savedFontSize) {
      handleFontResize(Number(savedFontSize))
    }
  }, []);

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
    localStorage.setItem("backgroundColor", color);
  }

  const handleFontColorChange = (color) => {
    setFontColor(color)
    localStorage.setItem('fontColor', color)
  }

  const handleFontResize = (size) => {
    setFontSize(size)
    localStorage.setItem('fontSize', size)
  }
  function handleSubmit(e) {
    e.preventDefault()
    updateUser()
    console.log('---->>>>', backgroundColor, fontColor, fontSize, username, email)

  }
  const updateUser = async () => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username, email: email
      }),
    };
    console.log(options, Constant.MAIN_URl + `users/${localStorage.id}/`)
    const res = await fetch(Constant.MAIN_URl + `users/${localStorage.id}`, options);
    const data = await res.json();
    console.log(data)
    localStorage.setItem("username", data.username)
    localStorage.setItem("userEmail", data.userEmail)
    toast.success(data.message)

  }
  function handleInput(e) {
    e.preventDefault()
    if (e.target.id === 'usernameInput') {
      SetUsername(e.target.value)
    }
    else {
      setEmail(e.target.value)
    }
  }
  return (

    <section style={{ backgroundColor: `${theme.primColor}` }}>
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-2 col-xl-4" style={{ backgroundColor: `${theme.primBG}` }}>
            <div className="m-5">
              <div className="card-body text-center">
                <div className="mt-3 mb-4">
                  {selectedImage ? (
                    <img className="img-fluid" style={{ maxWidth: "128px", maxHeight: "128px"}}
                      src={selectedImage}
                      alt="Your Image"

                    />
                  ) : (
                    <img
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
                <h4 className="mb-2">{username}</h4>
                <p className="text-muted mb-4">{email}</p>
              </div>
            </div>
          </div>
          <div className="col-10 col-xl-4">
            <div className="">
              <h2>Account settings</h2>

              <div className="mb-3">
                <label htmlFor="userNameInput" className="form-label">User name</label>
                <input onChange={handleInput} type="text" className="form-control" id="usernameInput" value={username}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input onChange={handleInput} className="form-control" type='email' id="emailInput" value={email}></input>
              </div>
              <ColourChanger onColorChange={handleBackgroundColorChange} />
              <FontColourChanger onFontChange={handleFontColorChange} />
              <FontResize onFontResize={handleFontResize} />
              <button type="" className="btn mb-3" data-bs-toggle="modal" data-bs-target="#saveSettings" style={{ backgroundColor: `${theme.accentColor}`, color: `${theme.primText}` }}>Save Settings</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="saveSettings" tabIndex="-1" aria-labelledby="saveSettingsLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="saveSettingsLabel">Account Settings</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Enter password to save settings</label>
                <input className="form-control" type='password' id="password"></input>
              </div>
              <button onClick={handleSubmit} id='btnSubmit' type="submit" className="btn mb-3" data-bs-dismiss="modal" style={{ backgroundColor: `${theme.accentColor}`, color: `${theme.primText}` }}>submit</button>

            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </section >
    // <div classNameName="profile-page-body" style={{backgroundColor, color: fontColor, fontSize}}>
    //   <h1 classNameName="text-center mt-5">Profile</h1>
    //   <div classNameName="container">
    //     <div classNameName="row">
    //       <div classNameName="col-md-6 position-relative">
    //         {selectedImage ? (
    //           <img
    //             src={selectedImage}
    //             alt="Your Image"
    //             classNameName="profile-image"
    //           />
    //         ) : (
    //           <img
    //             src="https://via.placeholder.com/200x200"
    //             alt="Placeholder Image"
    //             classNameName="profile-image"
    //           />
    //         )}
    //         <div classNameName="position-absolute bottom-10 start-50 translate-middle-x">
    //           <ImageSelector
    //             onSelect={handleImageSelect}
    //             image1="https://via.placeholder.com/200x200"
    //             image2="https://via.placeholder.com/300x300"
    //           />
    //         </div>
    //         <h3 classNameName="profileName">Profile Name</h3>
    //         <h3 classNameName="extraInfo">Email Address</h3>
    //       </div>
    //       <div classNameName="col-md-6">
    //         <h2>Screen settings</h2>
    //       <ColourChanger onColorChange={handleBackgroundColorChange}/>
    //       <FontColourChanger onFontChange={handleFontColorChange}/>
    //       <FontResize onFontResize={handleFontResize}/>
    //       </div>
    //     </div>
    //   </div>
    //   <section>
    //     <div classNameName="air air1"></div>
    //     <div classNameName="air air2"></div>
    //     <div classNameName="air air3"></div>
    //     <div classNameName="air air4"></div>
    //   </section>
    // </div>
  );
}
