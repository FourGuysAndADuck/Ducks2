package com.example.DucksNStuff.data;


import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue
    private long id;

    @Column
    private String username;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String email;

    //DONE: Not making address object, hard coded into multiple columns.
    @Column
    private String streetAddress;

    @Column
    private String stateAddress;

    @Column
    private String zipCode;

    //TODO: Spring Security to Hash pw
    @Column
    private String password;

    @Column
    private Date userCreatedAt;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column
    private UserRoles role;

}
