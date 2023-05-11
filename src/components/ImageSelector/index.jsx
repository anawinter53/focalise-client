import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../../contexts';
export const ImageSelector = (props) => {
  const [showModal, setShowModal] = useState(false);
  const {theme} = useTheme()
  function selectImage(imagePath) {
    setShowModal(false);
    props.onSelect(imagePath);
  }

  return (
    <>
      <button className="btn" style={{ backgroundColor: theme.primColor, color: theme.secColor }} onClick={() => setShowModal(true)}>Edit Picture</button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={3}>
                <img src={props.image1} alt="Image 1" className="img-thumbnail"  onClick={() => selectImage(props.image1)} />
              </Col>
              <Col xs={6} md={3}>
                <img src={props.image2} alt="Image 2" className="img-thumbnail"  onClick={() => selectImage(props.image2)} />
              </Col>
              <Col xs={6} md={3}>
                <img src={props.image3} alt="Image 3" className="img-thumbnail"  onClick={() => selectImage(props.image3)} />
              </Col><Col xs={6} md={3}>
                <img src={props.image4} alt="Image 4" className="img-thumbnail"  onClick={() => selectImage(props.image4)} />
              </Col><Col xs={6} md={3}>
                <img src={props.image5} alt="Image 5" className="img-thumbnail"  onClick={() => selectImage(props.image5)} />
              </Col><Col xs={6} md={3}>
                <img src={props.image6} alt="Image 6" className="img-thumbnail"  onClick={() => selectImage(props.image6)} />
              </Col>
              <Col xs={6} md={3}>
                <img src={props.image7} alt="Image 7" className="img-thumbnail"  onClick={() => selectImage(props.image7)} />
              </Col>
              <Col xs={6} md={3}>
                <img src={props.image8} alt="Image 8" className="img-thumbnail"  onClick={() => selectImage(props.image8)} />
              </Col>
              
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageSelector;
