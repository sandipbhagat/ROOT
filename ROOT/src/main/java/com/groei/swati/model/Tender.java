package com.groei.swati.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@Entity
@Table(name = "tender")
public class Tender implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tenderId")
	private int id;
	
	@Column(name = "nameOfCustomer")
	private String nameOfCustomer;
	
	@Column(name = "tenderNumber")
	private String tenderNumber;
	
	@Column(name = "addressOfCustomer")
	private String addressOfCustomer;
	
	@Column(name = "nameOfContactPerson")
	private String nameOfContactPerson;
	
	@Column(name = "numberOfContactPerson")
	private String numberOfContactPerson;

	@Column(name = "preQualificationCriteria")
	private String preQualificationCriteria;
	
	@Column(name = "preBidOpeningDate")
	private Date preBidOpeningDate;
	
	@Column(name = "tenderFee")
	private String tenderFee;
	
	@Column(name = "tenderPurchaseDueDate")
	private Date tenderPurchaseDueDate;
	
	@Column(name = "bgIsAcceptableOrNot")
	private Boolean bgIsAcceptableOrNot;
	
	@Column(name = "tenderSubmission")
	private String tenderSubmission;
	
	@Column(name = "paymentTerms")
	private String paymentTerms;
	
	@Column(name = "offerValidity")
	private Date offerValidity;
	
	@Column(name = "guaranteePeriod")
	private String guaranteePeriod;

	@Column(name = "deliveryPeriod")
	private String deliveryPeriod;

	@Column(name = "performanceGuarantee")
	private String performanceGuarantee;
	
	@Column(name = "specialTermsAndCond")
	private String specialTermsAndCond;
		
	@Column(name = "specialDocsToAttach")
	private String specialDocsToAttach;
	
	@Column(name = "sheetPreparedBy")
	private String sheetPreparedBy;
	
	@Column(name = "scopeOfWork")
	private String scopeOfWork;
	
	@Column(name = "estimatedValue")
	private String estimatedValue;
	
	@Column(name = "dueDate")
	private Date dueDate;
	
	@Column(name = "emd")
	private String emd;
	
	@Column(name = "interested")
	private Boolean interested;
	
	@Column(name = "statusOfTender")
	private String statusOfTender;
	
	@Column(name = "systemEnteredDate")
	private Date systemEnteredDate;
	
	@Column(name = "tenderSubmittedDate")
	private Date submittedDate;
	
	@Column(name = "tenderSubmitted")
	private Boolean tenderSubmitted;
	
	@Column(name = "technicalBidOpened")
	private Boolean technicalBidOpened;
	
	@Column(name = "technicalBidOpeningDate")
	private Date technicalBidOpeningDate;
	
	@Column(name = "technicallyQualified")
	private Boolean technicallyQualified;
	
	@Column(name = "priceBidOpened")
	private Boolean priceBidOpened;
	
	@Column(name = "priceBidOpeningDate")
	private Date priceBidOpeningDate;
	
	@Column(name = "lowestBidder")
	private Boolean lowestBidder;
	
	public String getTenderNumber() {
		return tenderNumber;
	}
	public void setTenderNumber(String tenderNumber) {
		this.tenderNumber = tenderNumber;
	}
	public String getAddressOfCustomer() {
		return addressOfCustomer;
	}
	public void setAddressOfCustomer(String addressOfCustomer) {
		this.addressOfCustomer = addressOfCustomer;
	}
	public String getNameOfContactPerson() {
		return nameOfContactPerson;
	}
	public void setNameOfContactPerson(String nameOfContactPerson) {
		this.nameOfContactPerson = nameOfContactPerson;
	}
	public String getNumberOfContactPerson() {
		return numberOfContactPerson;
	}
	public void setNumberOfContactPerson(String numberOfContactPerson) {
		this.numberOfContactPerson = numberOfContactPerson;
	}
	public String getPreQualificationCriteria() {
		return preQualificationCriteria;
	}
	public void setPreQualificationCriteria(String preQualificationCriteria) {
		this.preQualificationCriteria = preQualificationCriteria;
	}
	public Date getPreBidOpeningDate() {
		return preBidOpeningDate;
	}
	public void setPreBidOpeningDate(Date preBidOpeningDate) {
		this.preBidOpeningDate = preBidOpeningDate;
	}
	public String getTenderFee() {
		return tenderFee;
	}
	public void setTenderFee(String tenderFee) {
		this.tenderFee = tenderFee;
	}
	public Date getTenderPurchaseDueDate() {
		return tenderPurchaseDueDate;
	}
	public void setTenderPurchaseDueDate(Date tenderPurchaseDueDate) {
		this.tenderPurchaseDueDate = tenderPurchaseDueDate;
	}
	public Boolean getBgIsAcceptableOrNot() {
		return bgIsAcceptableOrNot;
	}
	public void setBgIsAcceptableOrNot(Boolean bgIsAcceptableOrNot) {
		this.bgIsAcceptableOrNot = bgIsAcceptableOrNot;
	}
	public String getTenderSubmission() {
		return tenderSubmission;
	}
	public void setTenderSubmission(String tenderSubmission) {
		this.tenderSubmission = tenderSubmission;
	}
	public String getPaymentTerms() {
		return paymentTerms;
	}
	public void setPaymentTerms(String paymentTerms) {
		this.paymentTerms = paymentTerms;
	}
	public Date getOfferValidity() {
		return offerValidity;
	}
	public void setOfferValidity(Date offerValidity) {
		this.offerValidity = offerValidity;
	}
	public String getGuaranteePeriod() {
		return guaranteePeriod;
	}
	public void setGuaranteePeriod(String guaranteePeriod) {
		this.guaranteePeriod = guaranteePeriod;
	}
	public String getDeliveryPeriod() {
		return deliveryPeriod;
	}
	public void setDeliveryPeriod(String deliveryPeriod) {
		this.deliveryPeriod = deliveryPeriod;
	}
	public String getPerformanceGuarantee() {
		return performanceGuarantee;
	}
	public void setPerformanceGuarantee(String performanceGuarantee) {
		this.performanceGuarantee = performanceGuarantee;
	}
	public String getSpecialTermsAndCond() {
		return specialTermsAndCond;
	}
	public void setSpecialTermsAndCond(String specialTermsAndCond) {
		this.specialTermsAndCond = specialTermsAndCond;
	}
	public String getSpecialDocsToAttach() {
		return specialDocsToAttach;
	}
	public void setSpecialDocsToAttach(String specialDocsToAttach) {
		this.specialDocsToAttach = specialDocsToAttach;
	}
	public String getSheetPreparedBy() {
		return sheetPreparedBy;
	}
	public void setSheetPreparedBy(String sheetPreparedBy) {
		this.sheetPreparedBy = sheetPreparedBy;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getEstimatedValue() {
		return estimatedValue;
	}
	public void setEstimatedValue(String estimatedValue) {
		this.estimatedValue = estimatedValue;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public String getEmd() {
		return emd;
	}
	public void setEmd(String emd) {
		this.emd = emd;
	}
	public Boolean getInterested() {
		return interested;
	}
	public void setInterested(Boolean interested) {
		this.interested = interested;
	}
	public String getStatusOfTender() {
		return statusOfTender;
	}
	public void setStatusOfTender(String statusOfTender) {
		this.statusOfTender = statusOfTender;
	}
	public Date getSystemEnteredDate() {
		return systemEnteredDate;
	}
	public void setSystemEnteredDate(Date systemEnteredDate) {
		this.systemEnteredDate = systemEnteredDate;
	}
	public Date getSubmittedDate() {
		return submittedDate;
	}
	public void setSubmittedDate(Date submittedDate) {
		this.submittedDate = submittedDate;
	}
	public Boolean getTenderSubmitted() {
		return tenderSubmitted;
	}
	public void setTenderSubmitted(Boolean tenderSubmitted) {
		this.tenderSubmitted = tenderSubmitted;
	}
	public Boolean getTechnicalBidOpened() {
		return technicalBidOpened;
	}
	public void setTechnicalBidOpened(Boolean technicalBidOpened) {
		this.technicalBidOpened = technicalBidOpened;
	}
	public Date getTechnicalBidOpeningDate() {
		return technicalBidOpeningDate;
	}
	public void setTechnicalBidOpeningDate(Date technicalBidOpeningDate) {
		this.technicalBidOpeningDate = technicalBidOpeningDate;
	}
	public Boolean getTechnicallyQualified() {
		return technicallyQualified;
	}
	public void setTechnicallyQualified(Boolean technicallyQualified) {
		this.technicallyQualified = technicallyQualified;
	}
	public Boolean getPriceBidOpened() {
		return priceBidOpened;
	}
	public void setPriceBidOpened(Boolean priceBidOpened) {
		this.priceBidOpened = priceBidOpened;
	}
	public Date getPriceBidOpeningDate() {
		return priceBidOpeningDate;
	}
	public void setPriceBidOpeningDate(Date priceBidOpeningDate) {
		this.priceBidOpeningDate = priceBidOpeningDate;
	}
	public Boolean getLowestBidder() {
		return lowestBidder;
	}
	public void setLowestBidder(Boolean lowestBidder) {
		this.lowestBidder = lowestBidder;
	}
	
	
}
