package com.example.DucksNStuff.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue
    private long id;

    //TODO:
    //store id fk? to tell what store "owns" each product

    @Column
    private String name;

    @Column
    private String imageURL;

    @Column
    private long stock;

    @Column
    private double price;

    //TODO: vvvv
    //Join Table for Category
}
