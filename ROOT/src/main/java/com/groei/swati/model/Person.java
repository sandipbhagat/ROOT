package com.groei.swati.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="contactpersons")
public class Person implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue
    @Column(name="personId")
	private int id;
	
	@Column(name="tenderId")
	private int tenderId;
	
	@Column(name = "nameOfPerson")
	private String nameOfPerson;

	@Column(name = "addressOfPerson")
	private String addressOfPerson;

	@Column(name = "phoneNumber")
	private String phoneNumber;

	@Column(name = "email")
	private String email;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public int getTenderId() {
		return tenderId;
	}

	public void setTenderId(int tenderId) {
		this.tenderId = tenderId;
	}

	public String getNameOfPerson() {
		return nameOfPerson;
	}

	public void setNameOfPerson(String nameOfPerson) {
		this.nameOfPerson = nameOfPerson;
	}

	public String getAddressOfPerson() {
		return addressOfPerson;
	}

	public void setAddressOfPerson(String addressOfPerson) {
		this.addressOfPerson = addressOfPerson;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
}
