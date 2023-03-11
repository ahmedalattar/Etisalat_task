package com.userAdimnstration.userAdimnstration.dao;

import com.userAdimnstration.userAdimnstration.model.Employees;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeesRepo extends JpaRepository<Employees, Long> {

}
