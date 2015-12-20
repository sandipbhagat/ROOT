package com.groei.swati.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.groei.swati.dao.TenderDao;
import com.groei.swati.model.Document;
import com.groei.swati.model.Party;
import com.groei.swati.model.Person;
import com.groei.swati.model.Tender;
import com.groei.swati.model.Work;


public class TenderServicesImpl implements TenderServices {

	@Autowired
	TenderDao tenderDao;
	
	@Override
	public boolean addTender(Tender tender) throws Exception {
		return tenderDao.addTender(tender);
	}

	@Override
	public Tender getTenderById(int id) throws Exception {
		return tenderDao.getTenderById(id);
	}

	@Override
	public List<Tender> getNewTenderList() throws Exception {
		return tenderDao.getNewTenderList();
	}

	@Override
	public boolean deleteTender(int id) throws Exception {
		return tenderDao.deleteTender(id);
	}

	@Override
	public boolean updateTender(Tender tender) throws Exception {
		return tenderDao.updateTender(tender);
	}

	@Override
	public List<Person> getPersonDetailsById(int id) {
		return tenderDao.getPersonDetailsById(id);
	}

	@Override
	public List<Document> getDocumentsById(int id) throws Exception {
		return tenderDao.getDocumentsById(id);
	}

	@Override
	public List<Tender> getTenderInProcessList() throws Exception {
		return tenderDao.getTenderInProcessList();
	}
	
	@Override
	public List<Tender> getTenderDisqualifiedList() throws Exception {
		return tenderDao.getTenderDisqualifiedList();
	}

	@Override
	public List<Party> getParties(int id) throws Exception {
		return tenderDao.getParties(id);
	}

	@Override
	public boolean addOrUpdateParty(Party party) throws Exception {
		return tenderDao.addOrUpdateParty(party);
	}

	@Override
	public boolean deleteParty(int id) throws Exception {
		return tenderDao.deleteParty(id);
	}

	@Override
	public boolean addOrUpdatePerson(Person person) {
		return tenderDao.addOrUpdatePerson(person);
	}

	@Override
	public boolean deletePerson(int id) {
		return tenderDao.deletePerson(id);
	}

	@Override
	public boolean addOrUpdateDocument(Document document) {
		return tenderDao.addOrUpdateDocument(document);
	}

	@Override
	public boolean deleteDocument(int id) {
		return tenderDao.deleteDocument(id);
	}

	@Override
	public Map<String, Integer> getAnaylsis() {
		return tenderDao.getAnaylsis();
	}

}
