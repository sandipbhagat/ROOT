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

import com.groei.swati.model.Payment;
import com.groei.swati.model.Person;
import com.groei.swati.model.Status;
import com.groei.swati.services.TenderServices;

@Controller
@RequestMapping("/contactpersons")
public class PersonController {
	
	@Autowired
	TenderServices tenderServices;

	static final Logger logger = Logger.getLogger(PersonController.class);


	@RequestMapping(value = "/getPerson/{id}", method = RequestMethod.GET)
	public @ResponseBody
	List<Person> getPersonDetailsById(@PathVariable("id") int id) {
		List<Person> listOfPersons = null;
		try {
			listOfPersons = tenderServices.getPersonDetailsById(id);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return listOfPersons;
	}
	
	@RequestMapping(value = "/addorupdate",  method = RequestMethod.POST)
	public @ResponseBody
	Status addOrUpdatePerson(@ModelAttribute Person person) {
		try {
			//tenderServices.addEntity(tender);
			tenderServices.addOrUpdatePerson(person);
			return new Status(1, "Person added Successfully !");
		} catch (Exception e) {
			// e.printStackTrace();
			return new Status(0, e.toString());
		}

	}
	
	@RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
	public @ResponseBody
	Status deletePerson(@PathVariable("id") int id) {
		try {
			tenderServices.deletePerson(id);
			return new Status(1, "Person deleted Successfully !");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}



}
