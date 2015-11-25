package com.groei.swati.services;

import java.util.List;

import com.groei.swati.model.Payment;
import com.groei.swati.model.Supplier;
import com.groei.swati.model.Work;

public interface WorkServices {

	public boolean addWork(Work work) throws Exception;
	public boolean updateWork(Work work) throws Exception;
	public Work getWorkById(int id) throws Exception;
	public List<Work> getWorkInProcessList() throws Exception;
	public boolean deleteWork(int id) throws Exception;
	public List<Work> getWorkCompleted() throws Exception;
	
	public List<Payment> getPaymentsById(int id) throws Exception;
	public boolean addOrUpdatePayment(Payment payment) throws Exception;
	public boolean deletePayment(int id) throws Exception;

	public List<Supplier> getSuppliersById(int id) throws Exception;	
	public boolean addOrUpdateSupplier(Supplier supplier) throws Exception;
	public boolean deleteSupplier(int id) throws Exception;
}
