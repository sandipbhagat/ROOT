package com.groei.swati.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@Entity
@Table(name = "work")
public class Work implements Serializable{

private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue
    @Column(name="workId")
	private int id;
	
	@Column(name="tenderId")
	private int tenderId;
	
	@Column(name = "nameOfCustomer")
	private String nameOfCustomer;
	
	@Column(name = "scopeOfWork")
	private String scopeOfWork;
	
	@Column(name = "workOrderStatus")
	private String workOrderStatus;
	
	@Column(name = "workOrderNumber")
	private int workOrderNumber;
	
	@Column(name = "workOrderDate")
	private Date workOrderDate;
	
	@Column(name = "valueOfWork")
	private String valueOfWork;
	
	@Column(name = "formalitiesCompleted")
	private Boolean formalitiesCompleted;
	
	@Column(name = "securityDepositBGAmount")
	private String securityDepositBGAmount;
	
	@Column(name = "securityDepositBGDate")
	private Date securityDepositBGDate;
	
	@Column(name = "validityOfSecurityDepositBG")
	private Date validityOfSecurityDepositBG;
	
	@Column(name = "dateOfWorkCompletionAsPerWorkOrder")
	private Date dateOfWorkCompletionAsPerWorkOrder;
	
	@Column(name = "dateOfInspection")
	private Date dateOfInspection;
	
	@Column(name = "dateOfMaterialDelivery")
	private Date dateOfMaterialDelivery;
	
	@Column(name = "dateOfWorkCompletion")
	private Date dateOfWorkCompletion;
	
	@Column(name = "projectCompletedInTime")
	private Boolean projectCompletedInTime;
	
	@Column(name = "expensesMadeAsOnDate")
	private String expensesMadeAsOnDate;
	
	@Column(name = "invoiceNumber")
	private String invoiceNumber;
	
	@Column(name = "dateOfInvoice")
	private Date dateOfInvoice;
	
	@Column(name = "dateOfReceiptOfPayment")
	private Date dateOfReceiptOfPayment;
	
	@Column(name = "workCompletedInAllRespect")
	private Boolean workCompletedInAllRespect;

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

	public String getNameOfCustomer() {
		return nameOfCustomer;
	}

	public void setNameOfCustomer(String nameOfCustomer) {
		this.nameOfCustomer = nameOfCustomer;
	}

	public String getScopeOfWork() {
		return scopeOfWork;
	}

	public void setScopeOfWork(String scopeOfWork) {
		this.scopeOfWork = scopeOfWork;
	}

	public String getWorkOrderStatus() {
		return workOrderStatus;
	}

	public void setWorkOrderStatus(String workOrderStatus) {
		this.workOrderStatus = workOrderStatus;
	}

	public int getWorkOrderNumber() {
		return workOrderNumber;
	}

	public void setWorkOrderNumber(int workOrderNumber) {
		this.workOrderNumber = workOrderNumber;
	}

	public Date getWorkOrderDate() {
		return workOrderDate;
	}

	public void setWorkOrderDate(Date workOrderDate) {
		this.workOrderDate = workOrderDate;
	}

	public String getValueOfWork() {
		return valueOfWork;
	}

	public void setValueOfWork(String valueOfWork) {
		this.valueOfWork = valueOfWork;
	}

	public Boolean getFormalitiesCompleted() {
		return formalitiesCompleted;
	}

	public void setFormalitiesCompleted(Boolean formalitiesCompleted) {
		this.formalitiesCompleted = formalitiesCompleted;
	}

	public String getSecurityDepositBGAmount() {
		return securityDepositBGAmount;
	}

	public void setSecurityDepositBGAmount(String securityDepositBGAmount) {
		this.securityDepositBGAmount = securityDepositBGAmount;
	}

	public Date getSecurityDepositBGDate() {
		return securityDepositBGDate;
	}

	public void setSecurityDepositBGDate(Date securityDepositBGDate) {
		this.securityDepositBGDate = securityDepositBGDate;
	}

	public Date getValidityOfSecurityDepositBG() {
		return validityOfSecurityDepositBG;
	}

	public void setValidityOfSecurityDepositBG(Date validityOfSecurityDepositBG) {
		this.validityOfSecurityDepositBG = validityOfSecurityDepositBG;
	}

	public Date getDateOfWorkCompletionAsPerWorkOrder() {
		return dateOfWorkCompletionAsPerWorkOrder;
	}

	public void setDateOfWorkCompletionAsPerWorkOrder(
			Date dateOfWorkCompletionAsPerWorkOrder) {
		this.dateOfWorkCompletionAsPerWorkOrder = dateOfWorkCompletionAsPerWorkOrder;
	}

	public Date getDateOfInspection() {
		return dateOfInspection;
	}

	public void setDateOfInspection(Date dateOfInspection) {
		this.dateOfInspection = dateOfInspection;
	}

	public Date getDateOfMaterialDelivery() {
		return dateOfMaterialDelivery;
	}

	public void setDateOfMaterialDelivery(Date dateOfMaterialDelivery) {
		this.dateOfMaterialDelivery = dateOfMaterialDelivery;
	}

	public Date getDateOfWorkCompletion() {
		return dateOfWorkCompletion;
	}

	public void setDateOfWorkCompletion(Date dateOfWorkCompletion) {
		this.dateOfWorkCompletion = dateOfWorkCompletion;
	}

	public Boolean getProjectCompletedInTime() {
		return projectCompletedInTime;
	}

	public void setProjectCompletedInTime(Boolean projectCompletedInTime) {
		this.projectCompletedInTime = projectCompletedInTime;
	}

	public String getExpensesMadeAsOnDate() {
		return expensesMadeAsOnDate;
	}

	public void setExpensesMadeAsOnDate(String expensesMadeAsOnDate) {
		this.expensesMadeAsOnDate = expensesMadeAsOnDate;
	}

	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	public Date getDateOfInvoice() {
		return dateOfInvoice;
	}

	public void setDateOfInvoice(Date dateOfInvoice) {
		this.dateOfInvoice = dateOfInvoice;
	}

	public Date getDateOfReceiptOfPayment() {
		return dateOfReceiptOfPayment;
	}

	public void setDateOfReceiptOfPayment(Date dateOfReceiptOfPayment) {
		this.dateOfReceiptOfPayment = dateOfReceiptOfPayment;
	}
	
	public Boolean getWorkCompletedInAllRespect() {
		return workCompletedInAllRespect;
	}

	public void setWorkCompletedInAllRespect(Boolean workCompletedInAllRespect) {
		this.workCompletedInAllRespect = workCompletedInAllRespect;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
