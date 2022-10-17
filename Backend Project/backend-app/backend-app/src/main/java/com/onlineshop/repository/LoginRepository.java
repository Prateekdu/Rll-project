package com.onlineshop.repository;

import com.onlineshop.bean.Login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, String>{

}
