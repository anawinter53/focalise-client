import "./ProfilePage.css";
import { useState } from "react";
import ImageSelector from "../../components/ImageSelector";

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("profileImage") || null
  );

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    localStorage.setItem("profileImage", image);
  };

  return (
    <div className="profile-page-body">
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
            <h3 className="extraInfo">Bio</h3>
            <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
          <div className="col-md-6">
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
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
