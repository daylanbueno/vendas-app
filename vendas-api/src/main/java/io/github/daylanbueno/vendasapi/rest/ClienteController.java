package io.github.daylanbueno.vendasapi.rest;

import io.github.daylanbueno.vendasapi.model.entity.Cliente;
import io.github.daylanbueno.vendasapi.model.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ClienteController {

    private final ClienteRepository clienteRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente salvar(@Valid @RequestBody  Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @GetMapping
    public List<Cliente> obterTodosClientes(){
        return clienteRepository.findAll();
    }
    @GetMapping("/{id}")
    public Cliente obterCliente(@PathVariable Integer id) {
        return clienteRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public void deleteCliente(@PathVariable Integer id) {
        clienteRepository.findById(id)
                        .map(cliente -> {
                            clienteRepository.delete(cliente);
                            return Void.TYPE;
                        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Cliente atualizar(@PathVariable Integer id, @Valid @RequestBody  Cliente cliente) {
        return clienteRepository.findById(id)
                .map(clienteAtual -> {
                    clienteAtual.setNome(cliente.getNome());
                    clienteAtual.setCpf(cliente.getCpf());
                    return clienteRepository.save(clienteAtual);
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
    }

}
