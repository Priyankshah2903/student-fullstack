package com.priyank.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
	@Autowired
	private StudentRepo studentRepo;
	@PostMapping("/student")
	public Student addStudent(@RequestBody Student student) {
		return studentRepo.save(student);
	}
	@GetMapping("/student")
	public List<Student> getAllStudent(){
		return studentRepo.findAll();
	}

}
