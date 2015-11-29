package com.groei.swati.services;

import java.util.List;

import com.groei.swati.model.Document;
import com.groei.swati.model.Party;
import com.groei.swati.model.Person;
import com.groei.swati.model.Tender;
import com.groei.swati.model.Work;

public interface TenderServices {

	public boolean addTender(Tender tender) throws Exception;
	public Tender getTenderById(int id) throws Exception;
	public List<Tender> getNewTenderList() throws Exception;
	public boolean deleteTender(int id) throws Exception;
	public boolean updateTender(Tender tender) throws Exception;
	public List<Tender> getTenderInProcessList() throws Exception;
	public List<Tender> getTenderDisqualifiedList() throws Exception;
	
	public List<Party> getParties(int id) throws Exception;
	public boolean addOrUpdateParty(Party party) throws Exception;
	public boolean deleteParty(int id) throws Exception;
	
	public List<Person> getPersonDetailsById(int id) throws Exception;
	public boolean addOrUpdatePerson(Person person);
	public boolean deletePerson(int id);
	
	public List<Document> getDocumentsById(int id) throws Exception;
	public boolean addOrUpdateDocument(Document document) throws Exception;
	public boolean deleteDocument(int id) throws Exception;
	
}
