package com.groei.swati.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payments")
public class Payment implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue
    @Column(name="paymentId")
	private int id;
	
	@Column(name="supplierId")
	private int supplierId;
	
	@Column(name = "dateOfPayment")
	private Date dateOfPayment;

	@Column(name = "natureOfExpense")
	private String natureOfExpense;

	@Column(name = "amount")
	private String amount;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(int supplierId) {
		this.supplierId = supplierId;
	}

	public Date getDateOfPayment() {
		return dateOfPayment;
	}

	public void setDateOfPayment(Date dateOfPayment) {
		this.dateOfPayment = dateOfPayment;
	}

	public String getNatureOfExpense() {
		return natureOfExpense;
	}

	public void setNatureOfExpense(String natureOfExpense) {
		this.natureOfExpense = natureOfExpense;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	
}
