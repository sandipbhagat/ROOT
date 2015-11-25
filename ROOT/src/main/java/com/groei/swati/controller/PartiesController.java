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
import com.groei.swati.model.Status;
import com.groei.swati.model.Tender;
import com.groei.swati.services.TenderServices;

@Controller
@RequestMapping("/parties")
public class PartiesController {

	@Autowired
	TenderServices tenderServices;

	static final Logger logger = Logger.getLogger(DocumentController.class);

	@RequestMapping(value = "/list/{id}", method = RequestMethod.GET)
	public @ResponseBody List<Party> getParties(@PathVariable("id") int id) {
		List<Party> listOfParties = null;
		try {
			listOfParties = tenderServices.getParties(id);

		} catch (Exception e) {
			e.printStackTrace();
		} 
		return listOfParties;
	}
	
	@RequestMapping(value = "/addorupdate",  method = RequestMethod.POST)
	public @ResponseBody
	Status addOrUpdateParty(@ModelAttribute Party party) {
		try {
			//tenderServices.addEntity(tender);
			tenderServices.addOrUpdateParty(party);
			return new Status(1, "Party added Successfully !");
		} catch (Exception e) {
			// e.printStackTrace();
			return new Status(0, e.toString());
		}

	}
	
	@RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
	public @ResponseBody
	Status deleteParty(@PathVariable("id") int id) {

		try {
			tenderServices.deleteParty(id);
			return new Status(1, "Party deleted Successfully !");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}

}