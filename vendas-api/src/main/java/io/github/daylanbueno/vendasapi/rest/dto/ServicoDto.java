package io.github.daylanbueno.vendasapi.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServicoDto {
    private String descricao;
    private String preco;
    private String data;
    private Integer idCliente;
}
