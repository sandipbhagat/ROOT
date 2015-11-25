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
import com.groei.swati.model.Payment;
import com.groei.swati.model.Status;
import com.groei.swati.model.Supplier;
import com.groei.swati.services.WorkServices;

@Controller
@RequestMapping("/supplier")
public class SupplierController {

	@Autowired
	WorkServices workServices;
	static final Logger logger = Logger.getLogger(SupplierController.class);

	@RequestMapping(value = "/getSuppliers/{id}", method = RequestMethod.GET)
	public @ResponseBody
	List<Supplier> getSuppliersById(@PathVariable("id") int id) {
		List<Supplier> listOfSuppliers = null;
		try {
			listOfSuppliers = workServices.getSuppliersById(id);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return listOfSuppliers;
	}
	
	
	@RequestMapping(value = "/addorupdate",  method = RequestMethod.POST)
	public @ResponseBody
	Status addOrUpdateSupplier(@ModelAttribute Supplier supplier) {
		try {
			//tenderServices.addEntity(tender);
			workServices.addOrUpdateSupplier(supplier);
			return new Status(1, "Supplier added Successfully !");
		} catch (Exception e) {
			// e.printStackTrace();
			return new Status(0, e.toString());
		}

	}
	
	@RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
	public @ResponseBody
	Status deleteSupplier(@PathVariable("id") int id) {
		try {
			workServices.deleteSupplier(id);
			return new Status(1, "Supplier deleted Successfully !");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}

}
