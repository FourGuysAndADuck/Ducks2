package com.example.DucksNStuff.repositories;

import com.example.DucksNStuff.data.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Long> {
}
