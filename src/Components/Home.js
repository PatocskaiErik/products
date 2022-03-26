import "../App.css";
import { fetchProducts } from "../Service/Service";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import { Table } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputElement = useRef("");

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const filteredProducts = products.filter((product) => {
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredProducts);
    } else {
      setSearchResults(products);
    }
  };

  const getSearchTerm = () => {
    searchHandler(inputElement.current.value);
  };

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div className="home-container">
      <div className="new-button">
        <Link to={`/new`}>
          <Button>
            <div className="new-product-title">Add new product</div>
          </Button>
        </Link>
        <div className="searchbox">
          <div className="bp4-input-group .bp4-input">
            <span className="bp4-icon bp4-icon-search"></span>
            <input
              className="bp4-round"
              type="search"
              placeholder="Search..."
              dir="auto"
              value={searchTerm}
              onChange={getSearchTerm}
              ref={inputElement}
            />
          </div>
        </div>
      </div>
      <div className="products-table">
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Pricing</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {searchTerm.length < 1
              ? products
                  ?.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.pricing}</td>
                        <td>{product.price}</td>
                        <td>{product.discount}</td>

                        <td className="text-center">
                          <Link to={`/${product.id}`}>
                            <Button>Edit</Button>
                          </Link>
                        </td>
                        <td className="text-center"></td>
                      </tr>
                    );
                  })
                  .reverse()
              : searchResults.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.pricing}</td>
                      <td>{product.price}</td>
                      <td>{product.discount}</td>

                      <td className="text-center">
                        <Link to={`/${product.id}`}>
                          <Button>Edit</Button>
                        </Link>
                      </td>
                      <td className="text-center"></td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
