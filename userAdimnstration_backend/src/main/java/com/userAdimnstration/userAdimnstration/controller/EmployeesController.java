package com.userAdimnstration.userAdimnstration.controller;

import com.userAdimnstration.userAdimnstration.model.Employees;
import com.userAdimnstration.userAdimnstration.service.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class EmployeesController {

    @Autowired
    EmployeesService employeesService;

    @GetMapping("/employees")
    public ResponseEntity<?> getAll() {
        return employeesService.getAll();
    }

    @GetMapping("/employeesWithPagination")
    public ResponseEntity<?> getAllًWithPagination(@RequestParam Integer page, @RequestParam Integer size) {
        return employeesService.getAll(page, size);
    }


    @PostMapping("/employees")
    public ResponseEntity<?> save(@Valid @RequestBody Employees employees) {
        return employeesService.save(employees);
    }

    @DeleteMapping("/employees")
    public ResponseEntity<?> delete(@RequestParam Long id) {
        return employeesService.delete(id);
    }

    @PutMapping("/employees")
    public ResponseEntity<?> update(@Valid @RequestBody Employees employees) {
        return employeesService.update(employees);
    }
}
