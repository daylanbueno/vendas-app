package io.github.daylanbueno.vendasapi;

public class UsuarioCadastradoException extends Exception {
    public UsuarioCadastradoException(String username) {
        super("Usuario já existe "+username);
    }
}
