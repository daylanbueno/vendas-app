package io.github.daylanbueno.vendasapi;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class BigDecimalConverter {

    public BigDecimal converterStringToBigDecimal(String value) {

        if (value == null) return null;

        // 1.000,00 -> 1000.00
        value = value.replace(".", "").replace(",", ".");
        return new BigDecimal(value);
    }
}
