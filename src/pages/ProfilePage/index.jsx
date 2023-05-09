//import "./ProfilePage.css";
import { useState, useEffect } from "react";
import ImageSelector from "../../components/ImageSelector";
import ColourChanger from "../../components/ColourChanger";
import FontColourChanger from "../../components/FontColorChanger";
import FontResize from "../../components/FontResize";
import { useTheme } from "../../contexts";
import Select from 'react-select'


export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("profileImage") || null
  );
  console.log('----->>>>>', localStorage)
  const { theme } = useTheme()
  const [backgroundColor, setBackgroundColor] = useState('');
  const [fontColor, setFontColor] = useState('')
  const [fontSize, setFontSize] = useState('')

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
  function handleusername(e) {
    e.preventDefault()

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
                    <img className="rounded-circle img-fluid" style={{ width: "100px;" }}
                      src={selectedImage}
                      alt="Your Image"

                    />
                  ) : (
                    <img
                      src="https://img.icons8.com/bubbles/256/null/gender-neutral-user.png"
                      alt="Placeholder Image"
                      className="rounded-circle img-fluid"
                    />
                  )}
                </div>
                <h4 className="mb-2">{localStorage.username}</h4>
                <p className="text-muted mb-4">{localStorage.useremail}</p>
              </div>
            </div>
          </div>
          <div className="col-10 col-xl-4">
            <div className="">
              <h2>Account settings</h2>

              <div className="mb-3">
                <label htmlFor="userNameInput" className="form-label">User name</label>
                <input type="text" className="form-control" id="userNameInput" value={localStorage.username}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input className="form-control" type='email' id="emailInput" value={localStorage.useremail}></input>
              </div>
              <ColourChanger onColorChange={handleBackgroundColorChange} />
              <FontColourChanger onFontChange={handleFontColorChange} />
              <FontResize onFontResize={handleFontResize} />
              <button type="submit" className="btn mb-3" data-bs-toggle="modal" data-bs-target="#saveSettings" style={{ backgroundColor: `${theme.accentColor}`, color: `${theme.primText}` }}>Save Settings</button>
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
              <button type="submit" className="btn mb-3" data-bs-dismiss="modal" style={{ backgroundColor: `${theme.accentColor}`, color: `${theme.primText}` }}>Save Settings</button>

            </div>

          </div>
        </div>
      </div>
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
