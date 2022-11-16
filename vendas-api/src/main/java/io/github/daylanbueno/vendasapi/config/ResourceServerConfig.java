package io.github.daylanbueno.vendasapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    private static final String [] PUBLIC_MACHES = {
            "/h2-console/**",
            "/api/usuarios/**",
            "/oauth/token"
    };

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        http.authorizeRequests()
                .antMatchers(PUBLIC_MACHES).permitAll()
                .anyRequest().authenticated();
    }
}
