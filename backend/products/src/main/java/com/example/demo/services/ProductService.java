package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Product;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {

	public List<Product> getProducts();

	public Product getProduct(Long productId);
	
	public Product addProduct(Product product);
	
	public Product updateProduct(Product product);
	
	public void deleteProduct(Long productId);
}