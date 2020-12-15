package com.teamulti.dashboard.API;

import org.springframework.data.repository.CrudRepository;

import com.teamulti.dashboard.API.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Integer> {

}
