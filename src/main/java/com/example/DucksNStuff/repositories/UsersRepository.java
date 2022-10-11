package com.example.DucksNStuff.repositories;

import com.example.DucksNStuff.data.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Long> {

    Users findByUsername(String username);

}
