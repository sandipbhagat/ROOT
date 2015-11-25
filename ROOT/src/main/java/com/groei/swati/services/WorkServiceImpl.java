package com.groei.swati.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.groei.swati.dao.WorkDao;
import com.groei.swati.model.Payment;
import com.groei.swati.model.Supplier;
import com.groei.swati.model.Work;

public class WorkServiceImpl implements WorkServices{

	@Autowired
	WorkDao workDao;

	@Override
	public boolean addWork(Work work) throws Exception {
		return workDao.addWork(work);
	}

	@Override
	public boolean updateWork(Work work) throws Exception {
		return workDao.updateWork(work);
	}

	@Override
	public Work getWorkById(int id) throws Exception {
		return workDao.getWorkById(id);
	}

	@Override
	public List<Work> getWorkInProcessList() throws Exception {
		return workDao.getWorkInProcessList();
	}

	@Override
	public boolean deleteWork(int id) throws Exception {
		return workDao.deleteWork(id);
	}

	@Override
	public List<Supplier> getSuppliersById(int id) throws Exception {
		return workDao.getSuppliersById(id);
	}

	@Override
	public List<Payment> getPaymentsById(int id) throws Exception {
		return workDao.getPaymentsById(id);
	}

	@Override
	public List<Work> getWorkCompleted() throws Exception {
		// TODO Auto-generated method stub
		return workDao.getWorkCompleted();
	}

	@Override
	public boolean addOrUpdatePayment(Payment payment) throws Exception {
		return workDao.addOrUpdatePayment(payment);
		
	}

	@Override
	public boolean deletePayment(int id) throws Exception {
		return workDao.deletePayment(id);
	}

	@Override
	public boolean addOrUpdateSupplier(Supplier supplier) throws Exception {
		return workDao.addOrUpdateSupplier(supplier);
	}

	@Override
	public boolean deleteSupplier(int id) throws Exception {
		return workDao.deleteSupplier(id);
	}

}
