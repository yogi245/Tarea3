package com.example.reactivepostgresdemo;


import com.example.reactivepostgresdemo.model.Customer;
import com.example.reactivepostgresdemo.repo.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@WebFluxTest
public class CustomerControlTest {

    @Autowired
    WebTestClient webTestClient;

    @MockBean
    CustomerRepository customerRepository;

    @Test
    void testGetCustomer(){
        Flux<Customer> customerFlux = Flux.just
                (new Customer(8,"vilma","vilma@hotmail.com","2022-09-18")
        ,new Customer(1,"juan","vilma@hotmail.com","2022-09-18"));

        Mockito.when(customerRepository.findAll()).thenReturn(customerFlux);

        webTestClient.get()
                .uri("/customer")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .jsonPath("$").isArray()
                .jsonPath("$[0].id").isEqualTo(8)
                .jsonPath("$[0].name").isEqualTo("vilma")
                .jsonPath("$[0].email").isEqualTo("vilma@hotmail.com")
                .jsonPath("$[0].fecha_de_nacimiento").isEqualTo("2022-09-18");
    }

    @Test
    void testPostCustomer(){
        Customer c = new Customer(1,"pedro",null,null);
        Mono<Customer> monoC = Mono.just(c);

        Mockito.when(customerRepository.save(c)).thenReturn(monoC);

        webTestClient.post()
                .uri("/customer")
                .contentType(MediaType.APPLICATION_JSON)
                .body(monoC, Customer.class)
                .exchange()
                .expectStatus().isOk()
                .expectBody(Customer.class).isEqualTo(c);
    }


}
