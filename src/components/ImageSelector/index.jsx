import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

export const ImageSelector = (props) => {
  const [showModal, setShowModal] = useState(false);

  function selectImage(imagePath) {
    setShowModal(false);
    props.onSelect(imagePath);
  }

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>Select Profile Image</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={3}>
                <img src={props.image1} alt="Image 1" className="img-fluid" style={{borderRadius: '50%'}} onClick={() => selectImage(props.image1)} />
              </Col>
              <Col xs={6} md={3}>
                <img src={props.image2} alt="Image 2" className="img-fluid" style={{borderRadius: '50%'}} onClick={() => selectImage(props.image2)} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageSelector;
