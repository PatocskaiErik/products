import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProductById,
  editProduct,
  fetchProductById
} from "../Service/Service";
import { Form } from "react-bootstrap";
import FormTextInput from "./FormTextInput";
import { Button } from "@blueprintjs/core";
import DeleteEntity from "./DeleteEntity";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editSuccess, setEditSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});

  const submitForm = (e) => {
    editProduct(product, id, setEditSuccess, setError);
    e.preventDefault();
  };

  const deleteClick = (e) => {
    deleteProductById(id, setDeleteSuccess, setError);
  };

  useEffect(() => {
    fetchProductById(setProduct, id);
  }, []);

  useEffect(() => {
    if (editSuccess) {
      navigate("/");
    }
  }, [editSuccess]);

  useEffect(() => {
    if (deleteSuccess) {
      navigate("/");
    }
  }, [deleteSuccess]);

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
      <div className="name">Edit Product</div>
      <div className="edit-container">
        <Form onSubmit={submitForm}>
          <FormTextInput
            label="Name"
            dataObject={product}
            dataObjectKey="name"
            setter={setProduct}
            required={true}
          />
          <FormTextInput
            label="Description"
            dataObject={product}
            dataObjectKey="description"
            setter={setProduct}
            required={true}
          />
          <FormTextInput
            label="Pricing"
            dataObject={product}
            dataObjectKey="pricing"
            setter={setProduct}
            required={true}
          />
          <FormTextInput
            type="number"
            label="Price"
            dataObject={product}
            dataObjectKey="price"
            setter={setProduct}
            required={true}
          />
          <FormTextInput
            type="number"
            label="Discount"
            dataObject={product}
            dataObjectKey="discount"
            setter={setProduct}
            required={true}
          />
          <div className="buttons">
            <Button
              variant="outline-secondary"
              className="edit"
              type="submit"
              style={{ marginRight: "20px" }}
            >
              Edit
            </Button>

            <DeleteEntity
              confirmationQuestion={`Are you sure to delete ${product.name} item?`}
              handleDelete={deleteClick}
              ID={product.id}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditProduct;
