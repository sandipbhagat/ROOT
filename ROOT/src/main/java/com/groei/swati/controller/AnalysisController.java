package com.groei.swati.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
@RequestMapping("/anaylsis")
public class AnalysisController {

	@Autowired
	TenderServices tenderServices;

	static final Logger logger = Logger.getLogger(AnalysisController.class);

	@RequestMapping(value = "/getAnaylsis", method = RequestMethod.GET)
	public @ResponseBody Map<String,Integer> getAnaylsis() {
		Map<String,Integer> map = new HashMap<String,Integer>();
		try {
			map = tenderServices.getAnaylsis();

		} catch (Exception e) { 
			e.printStackTrace(); 
		} 
		return map;
	}
	
}