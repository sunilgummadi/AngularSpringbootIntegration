/**
 * 
 */
package com.springbootangular.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springbootangular.model.Customer;

/**
 * @author sunil
 *
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	List<Customer> findByAge(int id);
}
