package com.groei.swati.dao;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.groei.swati.model.Document;
import com.groei.swati.model.Party;
import com.groei.swati.model.Payment;
import com.groei.swati.model.Supplier;
import com.groei.swati.model.Work;

@Transactional
public class WorkDaoImpl implements WorkDao {

	@Autowired
	SessionFactory sessionFactory;

	static final Logger logger = Logger.getLogger(WorkDaoImpl.class);

	Session session = null;

	@Override
	public boolean addWork(Work work) {
		session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(work);
		return false;
	}

	@Override
	public boolean updateWork(Work work) {
		session = this.sessionFactory.getCurrentSession();
		session.update(work);
		return false;

	}

	@Override
	public Work getWorkById(int id) {
		Work work = null;
		session = this.sessionFactory.getCurrentSession();
		work = (Work) session.load(Work.class,new Integer(id));
		return work;
	}

	@Override
	public List<Work> getWorkInProcessList() {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Work.class);
		criteria.add(Restrictions.or(Restrictions.isNull("workCompletedInAllRespect"),Restrictions.eq("workCompletedInAllRespect", false)));
		List<Work> listOfWork = (List<Work>) criteria.list();
		return listOfWork;
	}
	
	@Override
	public List<Work> getWorkCompleted() {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Work.class);
		criteria.add(Restrictions.eq("workCompletedInAllRespect", true));
		List<Work> listOfWork = (List<Work>) criteria.list();
		return listOfWork;
	}

	
	@Override
	public boolean deleteWork(int id) {
		session = this.sessionFactory.getCurrentSession();
		Work work = (Work) session.get(Work.class, id);
		session.delete(work);
		return false;
	}
	

	@Override
	public List<Payment> getPaymentsById(int id) {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Payment.class);
		criteria.add(Restrictions.eq("supplierId", id));
		List<Payment> listOfPayments = (List<Payment>) criteria.list();
		return listOfPayments;
	}

	@Override
	public boolean addOrUpdatePayment(Payment payment) {
		session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(payment);
		return false;
	}

	@Override
	public boolean deletePayment(int id) {
		session = this.sessionFactory.getCurrentSession();
		Payment payment = (Payment) session.get(Payment.class, id);
		session.delete(payment);
		return false;
	}


	@Override
	public List<Supplier> getSuppliersById(int id) {
		session = this.sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Supplier.class);
		criteria.add(Restrictions.eq("workId", id));
		List<Supplier> listOfSuppliers = (List<Supplier>) criteria.list();
		return listOfSuppliers;
	
	}

	@Override
	public boolean addOrUpdateSupplier(Supplier supplier) {
		session = this.sessionFactory.getCurrentSession();
		session.saveOrUpdate(supplier);
		return false;
	}

	@Override
	public boolean deleteSupplier(int id) {
		session = this.sessionFactory.getCurrentSession();
		Supplier supplier = (Supplier) session.get(Supplier.class, id);
		session.delete(supplier);
		return false;
	}

	protected Session getSession() {
		return  sessionFactory.getCurrentSession();
	}

}
