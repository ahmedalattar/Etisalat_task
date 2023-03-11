package com.userAdimnstration.userAdimnstration.service;

import com.userAdimnstration.userAdimnstration.model.Employees;
import org.springframework.http.ResponseEntity;

public interface EmployeesService {

    ResponseEntity<?> save(Employees employees);

    ResponseEntity<?> getAll(Integer page, Integer size);

    ResponseEntity<?> getAll();

    ResponseEntity<?> delete(Long id);

    ResponseEntity<?> update(Employees employees);
}
