package io.github.daylanbueno.vendasapi.model.repository;

import io.github.daylanbueno.vendasapi.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}

