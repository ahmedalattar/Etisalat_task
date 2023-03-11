package com.userAdimnstration.userAdimnstration.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;


@Entity
@Table(name = "departments")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Departments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "department_id")
    private Long departmentId;


    @Column(name = "department_name")
    @Size(max = 30)
    private String departmentName;

    @ManyToOne
    @JoinColumn(name = "manager_id")
    private Employees managerId ;
}