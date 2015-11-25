package com.groei.swati.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="suppliers")
public class Supplier  implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue
    @Column(name="supplierId")
	private int id;
	
	@Column(name="workId")
	private int workId;
	
	@Column(name = "nameOfSupplier")
	private String nameOfSupplier;

	@Column(name = "addressOfSupplier")
	private String addressOfSupplier;

	@Column(name = "phoneNumber")
	private String phoneNumber;
	
	@Column(name = "email")
	private String email;

	@Column(name = "finalValueOfOrder")
	private String finalValueOfOrder;

	@Column(name = "paymentTerms")
	private String paymentTerms;

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getWorkId() {
		return workId;
	}

	public void setWorkId(int workId) {
		this.workId = workId;
	}

	public String getNameOfSupplier() {
		return nameOfSupplier;
	}

	public void setNameOfSupplier(String nameOfSupplier) {
		this.nameOfSupplier = nameOfSupplier;
	}

	public String getAddressOfSupplier() {
		return addressOfSupplier;
	}

	public void setAddressOfSupplier(String addressOfSupplier) {
		this.addressOfSupplier = addressOfSupplier;
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

	public String getFinalValueOfOrder() {
		return finalValueOfOrder;
	}

	public void setFinalValueOfOrder(String finalValueOfOrder) {
		this.finalValueOfOrder = finalValueOfOrder;
	}

	public String getPaymentTerms() {
		return paymentTerms;
	}

	public void setPaymentTerms(String paymentTerms) {
		this.paymentTerms = paymentTerms;
	}

	
}
