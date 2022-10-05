package com.example.DucksNStuff.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "stores")

public class Stores {

    @Id
    @GeneratedValue
    private long id;

    //userid? maybe use inheritance.

    private String name;

    //TODO: Create products
    //private List<Products> Inventory;

    //Again with the address issue..

    private long phoneNumber;

    private Date storeCreatedAt;
    //TODO: Create Orders;
//    private List<Orders> storeOrders;

}
