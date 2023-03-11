package com.userAdimnstration.userAdimnstration.controller;

import com.userAdimnstration.userAdimnstration.model.Departments;
import com.userAdimnstration.userAdimnstration.model.Employees;
import com.userAdimnstration.userAdimnstration.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class DepartmentsController {

    @Autowired
    DepartmentService departmentService;

    @GetMapping("/departments")
    public ResponseEntity<?> getAll() {
        return departmentService.getAll();
    }

    @GetMapping("/departmentsWithPagination")
    public ResponseEntity<?> getAllًWithPagination(@RequestParam Integer page, @RequestParam Integer size) {
        return departmentService.getAll(page, size);
    }


    @PostMapping("/departments")
    public ResponseEntity<?> save(@Valid @RequestBody Departments departments) {
        return departmentService.save(departments);
    }

    @DeleteMapping("/departments")
    public ResponseEntity<?> delete(@RequestParam Long id) {
        return departmentService.delete(id);
    }

    @PutMapping("/departments")
    public ResponseEntity<?> update(@Valid @RequestBody Departments departments) {
        return departmentService.update(departments);
    }
}
