import { Modal } from "react-bootstrap";
import { Button } from "@blueprintjs/core";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteEntity = ({ confirmationQuestion, handleDelete, ID }) => {
  const [appear, setAppear] = useState(false);
  const handleClose = () => setAppear(false);
  const handleAppear = () => setAppear(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleAppear}>
        Delete
      </Button>
      <Modal show={appear} onHide={handleClose}>
        <Modal.Body>{confirmationQuestion}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              handleDelete(ID);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteEntity;
