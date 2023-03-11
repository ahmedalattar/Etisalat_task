package com.userAdimnstration.userAdimnstration.service;

import com.userAdimnstration.userAdimnstration.dao.DepartmentsRepo;
import com.userAdimnstration.userAdimnstration.model.Departments;
import com.userAdimnstration.userAdimnstration.model.Employees;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    DepartmentsRepo departmentsRepo;


    @Override
    public ResponseEntity<?> save(Departments departments) {
        try {
            Departments departmentsDB = departmentsRepo.save(departments);
            return new ResponseEntity<>(departmentsDB, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getAll() {
        try {
            List<Departments> departmentsList = departmentsRepo.findAll();
            return new ResponseEntity<>(departmentsList, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> getAll(Integer page, Integer size) {
        try {
            Pageable paging = PageRequest.of(page, size);
            Page<Departments> departmentsPage = departmentsRepo.findAll(paging);
            return new ResponseEntity<>(departmentsPage, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @Override
    public ResponseEntity<?> delete(Long id) {
        try {
            departmentsRepo.deleteById(id);
            return new ResponseEntity<>("the Department is deleted", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public ResponseEntity<?> update(Departments departments) {
        try {
            Departments departmentsDB = departmentsRepo.save(departments);
            return new ResponseEntity<>(departmentsDB, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
