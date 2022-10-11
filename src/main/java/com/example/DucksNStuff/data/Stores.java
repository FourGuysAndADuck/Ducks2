package com.example.DucksNStuff.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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

    //TODO:Stores should belong to a user.
    //userid? maybe use inheritance?

    private String name;

    //TODO: Create products, join table?
    //private List<Products> inventory;

    @Column
    private String shopStreetAddress;

    @Column
    private String shopStateAddress;

    @Column
    private String shopZipCode;

    @Column
    private long phoneNumber;

    @Column
    private Date storeCreatedAt;

    //TODO: Create Orders, join table as well?
//    private List<Orders> storeOrders;

}
