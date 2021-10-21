# Weather IT

---

Design Document

Abhishek Goel

Paul Provan

Rishabh Sharma

Travis Newberry

Jaishri Thakur

## Introduction

When planning a day outdoors, the first and most important thing to know is what the weather will be.

- See the weather situation at your current location
- View the weather conditions where you plan to go
- Save various locations for easy viewing

Use this weather application as an easy one-stop area for your trip and weather planning needs

## Storyboard

![Storyboard 1](https://github.com/goel1987/WEATHERIT/blob/main/Design%20Documents/Screen%20Shot%202021-09-26%20at%2010.46.48%20PM.png)
![Storyboard 2](https://github.com/goel1987/WEATHERIT/blob/main/Design%20Documents/Screen%20Shot%202021-09-26%20at%2010.46.57%20PM.png)
![Storyboard 3](https://github.com/goel1987/WEATHERIT/blob/main/Design%20Documents/Screen%20Shot%202021-09-26%20at%2010.47.05%20PM.png)

## Functional Requirements

### Requirement 100: View Weather at Current Location

#### Scenario

As a user interested in a knowing their current weather, they should be able to view the weather situation for their current location

#### Dependencies

Location access

Device has internet connection

#### Assumptions

Device has working GPS

#### Examples

1.1  

**Given** a user is viewing the weather at their current location

**When**  they click view weather at my location

**Then** they should see a description of their current weather (temperature, wind, clouds, etc.)

### Requirement 101: View Weather at Any Location

#### Scenario

As a user interested in a knowing the weather at a location, they should be able to search the weather situation for a desired location

#### Dependencies

Device has internet connection

#### Assumptions

Weather data in English

#### Examples

1.1  

**Given** a feed of weather data is available  

**When**  I search for “Columbus”  

**Then** I should receive at least one result with these attributes:  

Location: Columbus

Temperature, Wind, Precipitation

1.2

**Given** a feed of weather data is available  

**When** I search for “WLIFUHskvuWHGULDS”  

**Then** I should receive zero results (an empty list)

### Requirement 102: Save Location

#### Scenario

As a user interested in knowing the weather at a location at any given time, they should be able to save a location for future viewing

#### Dependencies

Weather search data is available and accessible.  

#### Assumptions

Desired locations are in the United States 

Weather  / locations are stated in English.  

#### Examples  

1.1

**Given** a feed of weather data is available  

**When** I select save location

**Then** I should be able to access the saved location from the cache

## Class Diagram

![ClassDiagram](https://github.com/goel1987/WEATHERIT/blob/main/Design%20Documents/ClassDiagram.png)

### Class Diagram Description

**MainActivity:** The first screen the user sees. This will have a list of parks, and an option to search for a different weather. 

**WeatherDetailsActivity:** A screen that shows details of a weather. 

**Weather:** Noun class that represents a weather. 

**Activities:** Noun class that represents various activities in a weather. 

**IWeatherDAO:** Interface for Retrofit to find and parse Weather JSON. 

**IActivitiesDAO:** Interface for Room to persist activity data per weather. 

## Product Backlog

- View weather at location
- Save location

## Scrum Roles

- DevOps/Product Owner/Scrum Master: Abhishek Goel
- Integration Developer: Rishabh Sharma, Jaishri Thakur
- Frontend Developer: Paul Provan, Travis Newberry

## Jira Board

[Jira Project Link](https://weatherit.atlassian.net/jira/software/projects/WEATHER/boards/1/roadmap?shared=&atlOrigin=eyJpIjoiNDI0NDM2YjE3NDBiNDc4Mjg1N2IwMTA4ZjNmMTdkMTUiLCJwIjoiaiJ9)

## Weekly Meeting

Saturday at 4PM.  Use this Teams:

[Office Hours Teams](https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2FkNDRmNTItY2RjYi00YmJkLTk1NmUtNjIyYzA3YmM5NDVi%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%2231f36615-1822-4e47-80da-e5d51d4ad6d1%22%7d)
