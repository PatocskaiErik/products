package com.example.demo.controller;

import java.util.List;

import com.example.demo.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.servicesImpl.ProductServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

	@Autowired
	private ProductServiceImpl productService;

	@GetMapping("/products")
	public List<Product> getAllProducts(Product product) {
		return this.productService.getProducts();
	}
	
	@GetMapping("/products/{productId}")
	public Product getProductById(@PathVariable String productId) {
		return this.productService.getProduct(Long.parseLong(productId));
	}
	
	@PostMapping("/products")
	public Product addProduct(@RequestBody Product product) {
		return this.productService.addProduct(product);
	}
	
	@PutMapping("/products/{productId}")
	public Product updateProduct(@RequestBody Product product) {
		return this.productService.updateProduct(product);
	}
	
	@DeleteMapping("/products/{productId}")
	public ResponseEntity<HttpStatus> deleteProduct(@PathVariable String productId) {
		try {
			this.productService.deleteProduct(Long.parseLong(productId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}