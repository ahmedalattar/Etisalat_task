package com.userAdimnstration.userAdimnstration.service;

import com.userAdimnstration.userAdimnstration.dao.EmployeesRepo;
import com.userAdimnstration.userAdimnstration.model.Employees;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmployeesServiceImpl implements EmployeesService {

    @Autowired
    EmployeesRepo employeesRepo;


    @Override
    public ResponseEntity<?> save(Employees employees) {
        Employees employeesDB = employeesRepo.save(employees);
        return new ResponseEntity<>(employeesDB, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getAll(Integer page, Integer size) {
        try {
            Pageable paging = PageRequest.of(page, size);
            Page<Employees> employeesPage = employeesRepo.findAll(paging);
            return new ResponseEntity<>(employeesPage, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(employeesRepo.findAll(), HttpStatus.OK);
    }


    @Override
    public ResponseEntity<?> delete(Long id) {
        try {
            employeesRepo.deleteById(id);
            return new ResponseEntity<>("the Employee is deleted", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> update(Employees employees) {
        try {
            Employees employeesDB = employeesRepo.save(employees);
            return new ResponseEntity<>(employeesDB, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
