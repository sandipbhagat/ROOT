package com.groei.swati.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="documents")
public class Document implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue
    @Column(name="documentId")
	private int id;
	
	@Column(name="tenderId")
	private int tenderId;
	
	@Column(name = "url")
	private String url;

	@Column(name = "uploadedDate")
	private Date uploadedDate;

	@Column(name = "downloaded")
	private boolean downloaded;


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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Date getUploadedDate() {
		return uploadedDate;
	}

	public void setUploadedDate(Date uploadedDate) {
		this.uploadedDate = uploadedDate;
	}

	public boolean isDownloaded() {
		return downloaded;
	}

	public void setDownloaded(boolean downloaded) {
		this.downloaded = downloaded;
	}


	
}
