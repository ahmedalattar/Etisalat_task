package com.userAdimnstration.userAdimnstration.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.util.Date;


@Entity
@Table(name = "employees")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Employees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Long employeeId;


    @Column(name = "email")
    @Email
    @Size(max = 25)
    private String email;

    @NotNull
    @Size(max = 20, min = 3)
    @Column(name = "first_name")
    @NonNull
    private String firstName;

    @NotNull
    @Size(max = 25, min = 3)
    @Column(name = "last_name")
    private String lastName;


    @Size(max = 20)
    @Pattern(regexp = "^[0-9-]*$")
    @Column(name = "phone_number")
    private String phone_number;

    @Column(name = "hire_date")
    @Temporal(TemporalType.DATE)
    private Date hireDate;

    @Column(name = "salary")
    @DecimalMin("1.00")
    private BigDecimal salary;

    @ManyToOne
    @JoinColumn(name = "manager_id")
    private Employees managerId;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Departments departmentId;
}