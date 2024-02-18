Feature: Test Cases Running at Bikroy.com
Background: 
     Given I open Bikroy.com

Scenario: 1. Login
    When click Login
    Then select Continue with Email and Select Signup option
    Then Enter name, email, password
    And Click signup

Scenario: 2.Search for Car
    When Car is written in search box 
    Then click on search box
   
Scenario: 3.Go for Mobile option
    When click Mobile
    Then click wearables and select area chattogram
    And Filter ads by Urgent

Scenario: 4.Looking for an apartment
    When find the apartment for sale option and select
    Then Sorted by price high to low
    When Price range 2 to 4 million 
    And Choose the first option and get back to main page

Scenario: 5.Search for jobs in bikroy
    When find jobs
    Then select specific area
    And click desire one and apply

Scenario: 6.Look for a Mobile at Sylhet uposhohor
    When choose location in Sylhet uposhoshor
    Then Select Mobile ads option
    Then Choose the type of poster
    And Select 1st option
    Then Have a chat with the poster and change decision immediately
    And Back to Home page

Scenario: 7.Choose the Language to Bengali
    When Click on language Icon

Scenario: 8.Choose an item from Men's fashion & Grooming
    When Select Icon
    Then choose catagory: Pant:Jeans

Scenario: 9. Choose an Item from Business & Industry
    When Select the option
    Then Choose catagory:Office Supply and Stationary
    Then Choose Location
    And Maximum Price Range

Scenario: 10. Bikroy Jobs
    When Finding Bikroy-jobs
    Then choose location is Habiganj
    Then Select show all jobs and select feature ads
    Then get back to bikroy

Scenario: 11. Select an Item from Essentials
    When Click on Essentials
    Then change mind and want to select Laptop
    Then Search for Asus Laptops
    Then choose RAM 8GB

Scenario: 12. Search for Bycycle ads
    When Choose Bycycle option in Home Page
    Then Select Price Range
    And choose the Third One

Scenario: 13. Career at Bikroy
    When Finding Career Icon
    Then Select the Top Job Option
    Then Show More Option and Apply

Scenario: 14. Select from Hobbies & Sports
    When Select Hobbies

Scenario: 15. Looking for a TV
    When Search for TVs
    Then Sorted by Price

Scenario: 16. Pets & Animals
    When Select Pets
    Then Choose pets catagory
   Then Select Types of pets
    
Scenario: 17. Home & Livings
    When Click Home & Livings
    Then Choose checkbox argent item
    And Select Location Dhaka

Scenario: 18. Search Bikes 
    When Search for bikes
    Then Select 1st search
    Then Report the ads and Choose a reason

Scenario: 19.Ads Promotions
    And Select ad promotion option

Scenario: 20.Login with Google
    Given I open Bikroy.com
    When Login and select continue with google