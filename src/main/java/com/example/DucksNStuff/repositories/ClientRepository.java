package com.example.DucksNStuff.repositories;

import com.example.DucksNStuff.data.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
