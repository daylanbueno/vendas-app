package io.github.daylanbueno.vendasapi.exception;

public class UsuarioCadastradoException extends RuntimeException {
    public UsuarioCadastradoException(String username) {
        super("Usuario já existe "+username);
    }
}
