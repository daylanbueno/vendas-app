package io.github.daylanbueno.vendasapi.service;

import io.github.daylanbueno.vendasapi.exception.UsuarioCadastradoException;
import io.github.daylanbueno.vendasapi.model.entity.Usuario;
import io.github.daylanbueno.vendasapi.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("servico-usuario")
public class UsuarioService implements UserDetailsService {
    @Autowired
    private UsuarioRepository repository;

    public Usuario salvar(Usuario usuario)  {
        boolean exists = repository.existsByUsername(usuario.getUsername());
        if(exists){
            throw new UsuarioCadastradoException(usuario.getUsername());
        }
        return repository.save(usuario);
    }

    @Override
    public UserDetails loadUserByUsername( String username ) throws UsernameNotFoundException {
        Usuario usuario = repository
                .findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Login não encontrado.") );

        return User
                .builder()
                .username(usuario.getUsername())
                .password(usuario.getPassword())
                .roles("USER")
                .build();
    }
}
