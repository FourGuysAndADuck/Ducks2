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
@Table(name = "comments")
public class Comments {

    //TODO:Create relations for multiple FKs.

    @Id
    @GeneratedValue
    private long id;

    //product ID

    //UserID

    @Column
    private String content;
}
