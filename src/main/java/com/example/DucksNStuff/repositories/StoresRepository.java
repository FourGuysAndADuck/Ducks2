package com.example.DucksNStuff.repositories;

import com.example.DucksNStuff.data.Stores;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoresRepository extends JpaRepository <Stores, Long> {
}
