package com.example.springreactbaeldung.repositories;

import com.example.springreactbaeldung.data.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
