package io.github.daylanbueno.vendasapi.model.repository;

import io.github.daylanbueno.vendasapi.model.entity.Cliente;
import io.github.daylanbueno.vendasapi.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {

    @Query("select s from Servico s inner join s.cliente c where  upper(c.nome) like %:nome% and MONTH(s.data) = :mes ")
    List<Servico> recuperarPorFiltroNomeEMes(String nome, Integer mes);
}

