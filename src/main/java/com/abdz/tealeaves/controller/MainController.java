package com.abdz.tealeaves.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class MainController {

    @RequestMapping("/")
    public String tealeaves() {
        return "home";
    }

    @RequestMapping("/p")
    public String parallax() {
        return "parallax";
    }

    @RequestMapping("/s")
    public String springtest() {
        return "springtest";
    }

    @RequestMapping("/sc")
    public String scroll() {
        return "scroll";
    }
    
    
}
