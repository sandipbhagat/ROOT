package com.groei.swati.dao;

import java.util.List;

import com.groei.swati.model.Document;
import com.groei.swati.model.Party;
import com.groei.swati.model.Person;
import com.groei.swati.model.Tender;
import com.groei.swati.model.Work;

public interface TenderDao {

	public boolean addTender(Tender tender);
	public boolean deleteTender(int id);
	public List<Tender> getNewTenderList();
	public Tender getTenderById(int id);
	public boolean updateTender(Tender tender);
	public List<Person> getPersonDetailsById(int id);
	public List<Document> getDocumentsById(int id);
	public List<Tender> getTenderInProcessList();
	public List<Tender> getTenderDisqualifiedList();
	public List<Party> getParties(int id);
	public boolean addOrUpdateParty(Party party);
	public boolean deleteParty(int id);
	public boolean addOrUpdatePerson(Person person);
	public boolean deletePerson(int id);
	public boolean addOrUpdateDocument(Document document);
	public boolean deleteDocument(int id);
	
}
