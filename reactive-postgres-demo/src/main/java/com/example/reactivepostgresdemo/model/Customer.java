package com.example.reactivepostgresdemo.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Date;

@Table
@Data
public class Customer {

    @Id
    private Integer id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private Date fecha_de_nacimiento;

    public Customer(Integer id, String name, String email, Date fecha_de_nacimiento) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.fecha_de_nacimiento = fecha_de_nacimiento;
    }
}
