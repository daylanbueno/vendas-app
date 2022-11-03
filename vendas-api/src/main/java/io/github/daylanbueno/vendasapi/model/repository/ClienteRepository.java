package io.github.daylanbueno.vendasapi.model.repository;

import io.github.daylanbueno.vendasapi.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}

