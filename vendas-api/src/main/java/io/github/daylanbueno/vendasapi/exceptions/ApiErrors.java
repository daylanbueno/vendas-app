package io.github.daylanbueno.vendasapi.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
public class ApiErrors {

    @Getter
    private List<String> messages;

    public ApiErrors(String message) {
        this.messages = Collections.singletonList(message);
    }
}
