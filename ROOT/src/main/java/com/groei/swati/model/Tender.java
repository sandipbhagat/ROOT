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
