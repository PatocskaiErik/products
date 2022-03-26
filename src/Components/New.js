import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Service/Service";
import { Form } from "react-bootstrap";
import FormTextInput from "./FormTextInput";
import { Button } from "@blueprintjs/core";

const New = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    addProduct(newProduct, setError, setSuccess);
    e.preventDefault();
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  if (error) {
    return (
      <>
        <div className="error-message">
          There is some problems currently. Please try again later...
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="name">New Product</div>
      <div className="new-container">
        <Form onSubmit={submitForm}>
          <FormTextInput
            label="Name"
            dataObject={newProduct}
            dataObjectKey="name"
            setter={setNewProduct}
            required={true}
          />
          <FormTextInput
            label="Description"
            dataObject={newProduct}
            dataObjectKey="description"
            setter={setNewProduct}
            required={true}
          />
          <FormTextInput
            label="Pricing"
            dataObject={newProduct}
            dataObjectKey="pricing"
            setter={setNewProduct}
            required={true}
          />
          <FormTextInput
            type="number"
            label="Price"
            dataObject={newProduct}
            dataObjectKey="price"
            setter={setNewProduct}
            required={true}
          />
          <FormTextInput
            type="number"
            label="Discount"
            dataObject={newProduct}
            dataObjectKey="discount"
            setter={setNewProduct}
            required={true}
          />
          <div className="buttons">
            <Button variant="outline-secondary" className="add" type="submit">
              Add
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default New;
