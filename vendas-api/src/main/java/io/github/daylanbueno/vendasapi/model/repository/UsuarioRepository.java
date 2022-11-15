package io.github.daylanbueno.vendasapi.model.repository;

import io.github.daylanbueno.vendasapi.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
