package com.groei.swati.dao;

import java.util.List;

import com.groei.swati.model.Payment;
import com.groei.swati.model.Supplier;
import com.groei.swati.model.Work;

public interface WorkDao {
	public boolean addWork(Work work);
	public boolean updateWork(Work work);
	public Work getWorkById(int id);
	public List<Work> getWorkInProcessList();
	public boolean deleteWork(int id);
	
	public List<Supplier> getSuppliersById(int id);
	public List<Payment> getPaymentsById(int id);
	public List<Work> getWorkCompleted();
	public boolean addOrUpdatePayment(Payment payment);
	public boolean deletePayment(int id);
	public boolean addOrUpdateSupplier(Supplier supplier);
	public boolean deleteSupplier(int id);
}
