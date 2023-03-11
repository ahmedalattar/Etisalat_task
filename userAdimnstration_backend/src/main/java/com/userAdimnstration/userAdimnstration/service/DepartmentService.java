package com.userAdimnstration.userAdimnstration.service;

import com.userAdimnstration.userAdimnstration.model.Departments;
import org.springframework.http.ResponseEntity;

public interface DepartmentService {

    ResponseEntity<?> save(Departments departments);

    ResponseEntity<?> getAll();

    ResponseEntity<?> getAll(Integer page, Integer size);

    ResponseEntity<?> delete(Long id);

    ResponseEntity<?> update(Departments departments);
}
