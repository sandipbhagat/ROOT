package com.groei.swati.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.groei.swati.model.Document;
import com.groei.swati.model.Party;
import com.groei.swati.model.Payment;
import com.groei.swati.model.Status;
import com.groei.swati.model.Supplier;
import com.groei.swati.services.WorkServices;

@Controller
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	WorkServices workServices;
	
	static final Logger logger = Logger.getLogger(PaymentController.class);

	@RequestMapping(value = "/getpayments/{id}", method = RequestMethod.GET)
	public @ResponseBody
	List<Payment> getPaymentsById(@PathVariable("id") int id) {
		List<Payment> listOfPayments = null;
		try {
			listOfPayments = workServices.getPaymentsById(id);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return listOfPayments;
	}
	
	
	@RequestMapping(value = "/addorupdate",  method = RequestMethod.POST)
	public @ResponseBody
	Status addOrUpdatePayment(@ModelAttribute Payment payment) {
		try {
			//tenderServices.addEntity(tender);
			workServices.addOrUpdatePayment(payment);
			return new Status(1, "Payment added Successfully !");
		} catch (Exception e) {
			// e.printStackTrace();
			return new Status(0, e.toString());
		}

	}
	
	@RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
	public @ResponseBody
	Status deletePayment(@PathVariable("id") int id) {
		try {
			workServices.deletePayment(id);
			return new Status(1, "Payment deleted Successfully !");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}

	
}
