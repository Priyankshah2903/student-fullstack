package com.priyank.api;

import org.springframework.boot.context.properties.bind.Name;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Student-Registration-Form")
public class Student {
	@Id
    private Integer sid;
    private String sname;
    private Integer sage;
    private String snumber;
}
