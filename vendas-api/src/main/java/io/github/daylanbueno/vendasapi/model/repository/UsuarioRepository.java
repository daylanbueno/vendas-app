package io.github.daylanbueno.vendasapi.model.repository;

import io.github.daylanbueno.vendasapi.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    boolean existsByUsername(String username);

     Optional<Usuario> findByUsername(String username);
}
