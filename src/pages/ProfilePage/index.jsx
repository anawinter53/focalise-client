import "./ProfilePage.css";
import { useState, useEffect } from "react";
import ImageSelector from "../../components/ImageSelector";
import ColourChanger from "../../components/ColourChanger";
import FontColourChanger from "../../components/FontColorChanger";
import FontResize from "../../components/FontResize";

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("profileImage") || null
  );
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

  return (
    <div className="profile-page-body" style={{backgroundColor, color: fontColor, fontSize}}>
      <h1 className="text-center mt-5">Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 position-relative">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Your Image"
                className="profile-image"
              />
            ) : (
              <img
                src="https://via.placeholder.com/200x200"
                alt="Placeholder Image"
                className="profile-image"
              />
            )}
            <div className="position-absolute bottom-10 start-50 translate-middle-x">
              <ImageSelector
                onSelect={handleImageSelect}
                image1="https://via.placeholder.com/200x200"
                image2="https://via.placeholder.com/300x300"
              />
            </div>
            <h3 className="profileName">Profile Name</h3>
            <h3 className="extraInfo">Email Address</h3>
          </div>
          <div className="col-md-6">
            <h2>Screen settings</h2>
          <ColourChanger onColorChange={handleBackgroundColorChange}/>
          <FontColourChanger onFontChange={handleFontColorChange}/>
          <FontResize onFontResize={handleFontResize}/>
          </div>
        </div>
      </div>
      <section>
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
    </div>
  );
}
