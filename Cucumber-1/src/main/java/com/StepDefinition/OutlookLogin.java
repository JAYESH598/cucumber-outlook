package com.StepDefinition;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OutlookLogin {
	
	
	WebDriver driver;
	@Given("^: User should Enter the Url and browser$")
	public void user_should_Enter_the_Url_and_browser() throws Throwable {
		
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\jv20273\\eclipse-workspace"
				+ "\\Cucumber-1\\browser\\chromedriver.exe" );
		
		 driver = new ChromeDriver();
		 
		//WebDriver driver = new FirefoxDriver();
		 
		 driver.get("https://outlook.office.com/");
		 
		 driver.manage().window().maximize();
		 
		 driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		 
		 driver.manage().deleteAllCookies();
		
	    
	}

	
	@When("^: user should click on the login button$")
	public void user_should_click_on_the_login_button() throws Throwable {
	    
		driver.findElement(By.xpath("(//*[text()='Sign in'])[1]")).click();
	}

	@Then("^: user should enter the outlook details$")
	public void user_should_enter_the_outlook_details(DataTable outlookdetails) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    
		
		
		//Thread.sleep(5000);
		List<List<String>>outlookValues =  outlookdetails.raw();
		driver.findElement(By.xpath("//*[@name='loginfmt']")) .sendKeys(outlookValues.get(0).get(0));
		driver.findElement(By.xpath("//*[@class='button ext-button primary ext-primary']")).click();
		driver.findElement(By.xpath("//*[@placeholder='Password']")).sendKeys(outlookValues.get(0).get(1));
		driver.findElement(By.xpath("//*[@value='Sign in']")).click();
		driver.findElement(By.xpath("//*[@type='submit']")).click();
		driver.findElement(By.xpath("//span[text()='New message']")).click();
		driver.findElement(By.xpath("//*[@aria-label='To']")).sendKeys(outlookValues.get(0).get(2));
		driver.findElement(By.xpath("//*[@placeholder='Add a subject']")).sendKeys(outlookValues.get(0).get(3));
		driver.findElement(By.xpath("//*[@aria-label='Message body']")).sendKeys(outlookValues.get(0).get(4));
		driver.findElement(By.xpath("//*[text()='Send']")).click();
		//Thread.sleep(2000);
		driver.findElement(By.xpath("(//*[text()='JV'])[1]")).click();
		driver.findElement(By.xpath("//*[text()='Sign out']")).click();
		

	}


	

}
