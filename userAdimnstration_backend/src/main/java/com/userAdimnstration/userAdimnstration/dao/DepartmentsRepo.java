package com.userAdimnstration.userAdimnstration.dao;

import com.userAdimnstration.userAdimnstration.model.Departments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentsRepo extends JpaRepository<Departments, Long> {

}
