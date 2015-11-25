package com.groei.swati.dao;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.groei.swati.model.Document;
import com.groei.swati.model.Party;
import com.groei.swati.model.Person;
import com.groei.swati.model.Tender;
 
@Transactional
public class TenderDaoImpl implements TenderDao {

	@Autowired
	SessionFactory sessionFactory;

	static final Logger logger = Logger.getLogger(TenderDaoImpl.class);

	Session session = null;

	@Override
	public boolean addTender(Tender tender) {
		session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(tender);
//		persist(tender);
		return false;
	}

	@Override
	public boolean updateTender(Tender tender) {
		session = this.sessionFactory.getCurrentSession();
		session.update(tender);
		return false;

	}

	@Override
	public boolean deleteTender(int id) {
		session = this.sessionFactory.getCurrentSession();
		Tender tender = (Tender) session.get(Tender.class, id);
		session.delete(tender);
		return false;
	}

	@Override
	public List<Tender> getNewTenderList() {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Tender.class);
		criteria.add(Restrictions.eq("tenderSubmitted", false));
		List<Tender> listOfTenders = (List<Tender>) criteria.list();
		return listOfTenders;
	}

	@Override
	public Tender getTenderById(int id) {
		session = this.sessionFactory.getCurrentSession();
		Tender tender = (Tender) session.get(Tender.class,new Integer(id));
		return tender;
	}

	@Override
	public List<Person> getPersonDetailsById(int id) {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Person.class);
		criteria.add(Restrictions.eq("tenderId", id));
		List<Person> list = (List<Person>) criteria.list();
		return list;
	}


	@Override
	public List<Document> getDocumentsById(int id) {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Document.class);
		criteria.add(Restrictions.eq("tenderId", id));
		List<Document> listOfDocuments = (List<Document>) criteria.list();
		return listOfDocuments;
	}

	@Override
	public List<Tender> getTenderInProcessList() {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Tender.class);
		criteria.add(Restrictions.eq("tenderSubmitted", true));
		criteria.add(Restrictions.eq("lowestBidder", false));
		List<Tender> listOfTenders = (List<Tender>) criteria.list();
		return listOfTenders;
	}

	@Override
	public List<Party> getParties(int id) {
		//return (List<Party>) this.sessionFactory.getCurrentSession().createCriteria(Party.class).list();
		
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Party.class);
		criteria.add(Restrictions.eq("tenderId", id));
		List<Party> listOfParties = (List<Party>) criteria.list();
		return listOfParties;
	}

	@Override
	public boolean addOrUpdateParty(Party party) {
		session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(party);
		return false;
	}

	@Override
	public boolean deleteParty(int id) {
		session = this.sessionFactory.getCurrentSession();
		Party party = (Party) session.get(Party.class, id);
		session.delete(party);
		return false;
	}

	@Override
	public boolean addOrUpdatePerson(Person person) {
		session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(person);
		return false;
	}

	@Override
	public boolean deletePerson(int id) {
		session = this.sessionFactory.getCurrentSession();
		Person person = (Person) session.get(Person.class, id);
		session.delete(person);
		return false;
	}

	@Override
	public boolean addOrUpdateDocument(Document document) {
		session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(document);
		return false;
	}

	@Override
	public boolean deleteDocument(int id) {
		session = this.sessionFactory.getCurrentSession();
		Document document = (Document) session.get(Document.class, id);
		session.delete(document);
		return false;
	}
}
