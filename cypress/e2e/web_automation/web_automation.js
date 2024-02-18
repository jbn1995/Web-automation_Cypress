import { Before, After, Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("I open Bikroy.com", () => {
    cy.visit('https://bikroy.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
})
When("click Login",()=>{
    cy.xpath("//a[@aria-label='Login']").click()
})
Then("select Continue with Email and Select Signup option", ()=>{
    cy.xpath("//span[@class='email-text--FbASN']").click()
    cy.xpath("//button[normalize-space()='Sign up']").click()
})
Then("Enter name, email, password", ()=>{
    cy.xpath("//input[@id='input_name']").type("Noushad Hasan")
    cy.xpath("//input[@id='input_email']").type("hossainusman@gmail.com")
    cy.xpath("//input[@id='input_password']").type("Noushad_hasan1234@")
    cy.xpath("//input[@id='input_password-confirm']").type("Noushad_hasan1234@")
})
And("Click signup", ()=>{
    cy.xpath("(//div[contains(@class,'block--3v-Ow')])[20]").click()
})
When("Car is written in search box", () => {
    cy.get(".search-bar-container--tnPU2").type('Car')
})
Then("click on search box", () =>{
    cy.get(".search-button-container--Ur5ku.gtm-home-search-click").click()
})
When("Login and select continue with google", () => {
    cy.get("a[aria-label='Login']").click() 
    cy.wait(200)
    cy.xpath("//span[@class='email-text--FbASN']").should("be.visible").click()   
})

When("click Mobile", () => {
    cy.xpath("//p[normalize-space()='Mobiles']").should("be.visible").click()
    
})
Then("click wearables and select area chattogram", () => {
    cy.xpath("//span[normalize-space()='Wearables']").click()
    cy.xpath("//span[normalize-space()='Chattogram']").should("be.visible").click()
})
And("Filter ads by Urgent", () => {
    cy.xpath("//label[@for='checkbox_id_0']//span[@class='label-text-span--2LWsk']").click()
})
When("find the apartment for sale option and select", () => {
    cy.xpath("//span[normalize-space()='Apartments For Sale']").click()
})
Then("Sorted by price high to low", () => {
    cy.xpath("//span[@class='inline-display--3Xta0 popover--3tlT1']//span//button[@id='dd-button']").click()
    cy.xpath("//li[@id='price_desc']").click()
})
When("Price range 2 to 4 million", () =>{
    cy.xpath("//div[@id='collapsible-3']//span[@class='image-rotate--2qAnk']").click()
    cy.xpath("//div[@id='collapsible-content-3']//div[@class='input--3B_tm full-width--1vKwp']//input[@id='input_4']").type(2000000,{force: true})
    cy.xpath("//div[@id='collapsible-content-3']//div[@class='full-width--1vKwp']//input[@id='input_4']").type(4000000, {force: true})
    cy.xpath("//div[@id='collapsible-content-3']//button[@type='button'][normalize-space()='Apply']").click()
})
And("Choose the first option and get back to main page", ()=> {
    cy.xpath("(//div[@class='container--2uFyv'])[3]").click()
    cy.xpath("//a[@title='Bikroy - the largest marketplace in Bangladesh']").click()
})
When("find jobs",()=>{
    cy.xpath("//p[normalize-space()='Jobs']").click()
    cy.xpath("//button[normalize-space()='View all jobs']").click()
})
Then("select specific area", ()=> {
    cy.xpath("//button[normalize-space()='Select Location']").click()
    cy.xpath("//div[contains(@class,'name--4feK3')][normalize-space()='Dhaka']").click()
    cy.xpath("//div[contains(text(),'Mohammadpur')]").click()
})
And("click desire one and apply",()=>{
    cy.xpath("(//div[@class='container--2uFyv'])[1]").click()
    cy.xpath("//div[@class='justify-content-flex-end--jceWj align-items-normal--vaTgD flex-wrap-nowrap--3IpfJ flex-direction-row--27fh1 flex--3fKk1']//button[@type='button'][normalize-space()='Call employer']").click({force: true})
})
When("choose location in Sylhet uposhoshor", ()=>{
    cy.xpath("(//button[@class='btn--1gFez default--T8kE3 small--1MQ15 location-picker-btn--p3-uX gtm-home-location-picker-click'])[1]").click()
    cy.xpath("(//div[contains(@class,'name--4feK3')][normalize-space()='Sylhet'])[1]").click()
    cy.xpath("//div[contains(text(),'Uposhohor')]").click()
})
Then("Select Mobile ads option", ()=>{
    cy.xpath("//p[normalize-space()='Mobiles']").click()
})
Then("Choose the type of poster", ()=>{
    cy.xpath("(//button[@id='dd-button'])[2]").click()
    cy.xpath("//li[@id='only_members']").click()
})
And("Select 1st option", ()=>{
    cy.xpath("(//div[@class='container--2uFyv'])[1]").click()
})
Then("Have a chat with the poster and change decision immediately",()=>{
    cy.xpath("(//div[@class='icon--3G1Gv'])[1]").click()
    cy.xpath("//button[@aria-label='Close modal']").click()
})
And("Back to Home page", ()=>{
    cy.xpath("//a[@title='Bikroy - the largest marketplace in Bangladesh']").click()
})
When("Click on language Icon", ()=>{
    cy.xpath("(//button[contains(text(),'বাংলা')])[1]").click()
})
When("Select Icon", ()=>{
    cy.xpath("//a[@href='/en/ads/bangladesh/mens-fashion']").click()
})
Then("choose catagory: Pant:Jeans", ()=>{
    cy.xpath("//span[normalize-space()='Pants']").click()
    cy.xpath("//input[@placeholder='What are you looking for?']").type("Jeans")
    cy.xpath("//button[@type='submit']").click()
})
When("Select the option", ()=>{
    cy.xpath("//p[normalize-space()='Business & Industry']").click()
})
Then("Choose catagory:Office Supply and Stationary", ()=>{
    cy.xpath("//span[normalize-space()='Office Supplies & Stationary']").click()
})
Then("Choose Location", ()=>{
    cy.xpath("//span[normalize-space()='Khulna']").click()
    
})
And("Maximum Price Range", ()=>{
    cy.xpath("//div[normalize-space()='Price (Tk)']").click()
    
    cy.xpath("(//input[@id='input_2'])[1]").type(400)
    cy.xpath("//button[normalize-space()='Apply']").click()
})
When("Finding Bikroy-jobs", () =>{
    cy.xpath("(//span[@class='pad-right--1WcbJ'])[1]").click()
})
Then("choose location is Habiganj", ()=>{
    cy.xpath("//button[normalize-space()='Select Location']").click()
    cy.xpath("//div[contains(text(),'Sylhet Division')]").click()
    cy.xpath("//div[contains(text(),'Habiganj')]").click()
})
Then("Select show all jobs and select feature ads", () =>{
    cy.xpath("//button[normalize-space()='View all jobs']").click()
    cy.xpath("(//span[contains(@class,'label-text-span--2LWsk')])[2]").click()
})
Then("get back to bikroy", ()=>{
    cy.xpath("//a[normalize-space()='Back to Bikroy']").click()
})
When("Click on Essentials",() =>{
    cy.xpath("//p[normalize-space()='Essentials']").click()
    
})
Then("change mind and want to select Laptop", () =>{
    cy.xpath("//div[@class='ellipsis--AX_lz']").click()
    cy.xpath("//div[contains(text(),'Electronics')]").click()
    cy.xpath("//div[contains(text(),'Laptops')]").click()
})
Then("Search for Asus Laptops", ()=>{
    cy.xpath("//input[@placeholder='What are you looking for?']").type("Asus")
    cy.xpath("//button[@type='submit']").click()
})
Then("choose RAM 8GB", ()=>{
    cy.xpath("//div[normalize-space()='RAM']").click()
    cy.get("label[for='ram-gb_8']").click()
})
When("Choose Bycycle option in Home Page", ()=>{
    cy.xpath("//span[normalize-space()='Bicycles']").click()
})
Then("Select Price Range", ()=>{
    cy.xpath("//div[normalize-space()='Price (Tk)']").click()
    cy.xpath("(//input[@id='input_2'])[1]").type(5000)
    cy.get("button[class='btn--1gFez default--T8kE3 small--1MQ15 full-width--1vKwp apply-button--1yNY-']").click()
})
And("choose the Third One", ()=>{
    cy.xpath("(//div[@class='container--2uFyv'])[3]").click()
})
When("Finding Career Icon", ()=>{
    cy.xpath("//span[normalize-space()='Careers']").click()

})
Then("Select the Top Job Option", ()=>{
    cy.xpath("(//div[@class='container--2uFyv'])[1]").click()
})
Then("Show More Option and Apply", ()=>{
    cy.xpath("(//button[@class='expander--PzBP6'])[1]").click()
    cy.xpath("//button[@id='second']").click()
})
When("Select Hobbies", ()=>{
    cy.xpath("//p[normalize-space()='Hobbies, Sports & Kids']").click()


})
When("Search for TVs", ()=>{
    cy.xpath("//span[normalize-space()='TVs']").click()
   
})
Then("Sorted by Price", ()=>{
    cy.xpath("//span[contains(text(),'Date: Newest on top')]").click()
    cy.xpath("//li[@id='price_asc']").click()
})
When("Select Pets", () =>{
    cy.xpath("//p[normalize-space()='Pets & Animals']").click()
})
Then("Choose pets catagory", ()=>{
    cy.xpath("//span[normalize-space()='Pets']").click()

})
Then("Select Types of pets", ()=>{
    cy.xpath("(//span[@class='label-text-span--2LWsk'])[4]").click({force: true});
})

When("Click Home & Livings", ()=>{
    cy.xpath("//p[normalize-space()='Home & Living']").click()
})
Then("Choose checkbox argent item", ()=>{
    cy.xpath("(//span[contains(@class,'label-text-span--2LWsk')])[1]").click()
})
And("Select Location Dhaka", ()=>{
    cy.xpath("//span[normalize-space()='Dhaka']").click()
})
When("Search for bikes", ()=>{
    cy.xpath("//input[@placeholder='What are you looking for?']").type("bikes")
    cy.xpath("//button[@type='submit']").click()
})
Then("Select 1st search", ()=>{
    cy.xpath("(//div[@class='container--2uFyv'])[1]").click()
})
Then("Report the ads and Choose a reason", ()=>{
    cy.get("button[class='btn--1gFez default--T8kE3 small--1MQ15']").click()
    cy.xpath("//button[normalize-space()='Reason']").click()
    cy.xpath("//div[normalize-space()='Fraud']").click()
    cy.xpath("//input[@id='input_email']").type("hossainusman@gmail.com")
    cy.xpath("//textarea[@name='message']").type("Fraud")
    cy.xpath("//button[normalize-space()='Send']").click()
})
And("Select ad promotion option",()=>{
    cy.xpath("//span[normalize-space()='Ad Promotions']").click()
})
