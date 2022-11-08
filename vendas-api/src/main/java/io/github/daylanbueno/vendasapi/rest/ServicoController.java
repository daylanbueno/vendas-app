package io.github.daylanbueno.vendasapi.rest;

import io.github.daylanbueno.vendasapi.BigDecimalConverter;
import io.github.daylanbueno.vendasapi.model.entity.Cliente;
import io.github.daylanbueno.vendasapi.model.entity.Servico;
import io.github.daylanbueno.vendasapi.model.repository.ClienteRepository;
import io.github.daylanbueno.vendasapi.model.repository.ServicoRepository;
import io.github.daylanbueno.vendasapi.rest.dto.ServicoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/servicos")
@RequiredArgsConstructor
public class ServicoController {

    private final ClienteRepository clienteRepository;
    private final ServicoRepository servicoRepository;
    private final BigDecimalConverter bigDecimalConverter;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Servico salvar(@RequestBody @Valid ServicoDto servicoDto) {
        LocalDate data = LocalDate.parse(servicoDto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

        Cliente cliente = clienteRepository
                            .findById(servicoDto.getIdCliente())
                            .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente não encontrado!"));

        Servico novoServico = Servico.builder()
                .data(data)
                .descricao(servicoDto.getDescricao())
                .cliente(cliente)
                .valor(bigDecimalConverter.converterStringToBigDecimal(servicoDto.getPreco())).build();

        return servicoRepository.save(novoServico);
    }

    @GetMapping
    public List<Servico> recuperarPorFiltro(
            @RequestParam(value = "nome", required = false, defaultValue = "") String nome,
            @RequestParam(value = "mes", required = false) Integer mes ) {
        return servicoRepository.recuperarPorFiltroNomeEMes(nome, mes);
    }

}
