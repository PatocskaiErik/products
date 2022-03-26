package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@Table(name="products")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Nullable
	private long id;

	private String name;

	private String description;

	private String pricing;

	private Integer price;

	private Integer discount;

	public Product() {
		this.name = name;
		this.description = description;
		this.pricing = pricing;
		this.price = price;
		this.discount = discount;
	}
}