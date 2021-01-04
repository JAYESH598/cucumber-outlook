$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jv20273/eclipse-workspace/Cucumber-1/src/main/java/com/cucumber/OutlookLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Outlook Login Action",
  "description": "",
  "id": "outlook-login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Outlook Action scenario",
  "description": "",
  "id": "outlook-login-action;outlook-action-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": ": User should Enter the Url and browser",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When : title of the page is outlook"
    }
  ],
  "line": 9,
  "name": ": user should click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": ": user should enter the outlook details",
  "rows": [
    {
      "comments": [
        {
          "line": 13,
          "value": "#Then : user click on the Next button"
        },
        {
          "line": 15,
          "value": "#Then : User should click on the Submit button"
        },
        {
          "line": 17,
          "value": "#Then : click on the yesbtn"
        }
      ],
      "cells": [
        "jayesh.vudadi@ojas-it.com",
        "$XSM7#@25",
        "jayesh.vudadi@ojas-it.com",
        "Automation testing cucuber",
        "CucumberTesting Automation"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OutlookLogin.user_should_Enter_the_Url_and_browser()"
});
formatter.result({
  "duration": 16085042300,
  "status": "passed"
});
formatter.match({
  "location": "OutlookLogin.user_should_click_on_the_login_button()"
});
formatter.result({
  "duration": 301790500,
  "status": "passed"
});
formatter.match({
  "location": "OutlookLogin.user_should_enter_the_outlook_details(DataTable)"
});
formatter.result({
  "duration": 21592385600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@aria-label\u003d\u0027To\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027OJAS-DD282\u0027, ip: \u0027192.168.2.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\jv20273\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53670}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 57518155e2fce3ac3a35a0f60ca0140b\n*** Element info: {Using\u003dxpath, value\u003d//*[@aria-label\u003d\u0027To\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.StepDefinition.OutlookLogin.user_should_enter_the_outlook_details(OutlookLogin.java:63)\r\n\tat ✽.Then : user should enter the outlook details(C:/Users/jv20273/eclipse-workspace/Cucumber-1/src/main/java/com/cucumber/OutlookLogin.feature:11)\r\n",
  "status": "failed"
});
});