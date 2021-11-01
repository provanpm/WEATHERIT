package com.WeatherIT;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WeatherITApplicationController {
	@RequestMapping("/index")
	public String start() {
		return "index";
	}
	
	@RequestMapping(value = "/login")
	public String available() {
		return "login";
	}

}
