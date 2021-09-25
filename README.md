# Weather IT

---

Design Document

Abhishek Goel

Paul Provan

Rishabh Sharma

Travis Newberry

Jaishri Thakur

## Introduction

Looking for something to do outdoors? Planning a day at your favorite park? Park Finder can help

- Cache your local greenspaces and public parks
- Save images and descriptions of your favorite locations
- Add notes and more about specific park visits
- Search a database of outdoor spaces

Use your mobile device as a hub for all the information you'll need to plan you trip to the park. Location, description, visualization and general information are all features someone can utilize with this app to make their plans for the day.

## Storyboard

![Storyboard](https://github.com/phamrina/Park-Finder/blob/main/phone.PNG)

## Functional Requirements

### Requirement 100.0: Add Park

#### Scenario

As a user interested in a park, they should be able to add a new park with name, image, description and location  

#### Dependencies

Camera permissions

Device has internet connection

#### Assumptions

Device has working camera

#### Examples

1.1  

**Given** a user is adding a new park 

**When**  they click add park  

**Then** it should be verefied they have included name and location

1.2

**Given** a user is adding a new park 

**When** they choose to add image(s)

**Then** the device camera should activate and display capture 

### Requirement 101: Search Park

#### Scenario

As a user interested in going to the park, they should be able to search parks based on a variety of information, such as name or location

#### Dependencies

Device has internet connection

#### Assumptions

Park data in English

#### Examples

1.1  

**Given** a feed of park data is available  

**When**  I search for “Eden”  

**Then** I should receive at least one result with these attributes:  

Park Name: Eden Park

Location: 950 Eden Park Dr, Cincinnati, OH 45202

1.2

**Given** a feed of park data is available  

**When** I search for “Burnet”  

**Then** I should receive at least one result with these attributes:   

Park Name: Burnet Woods

Location: 3251 Brookline Ave, Cincinnati, OH 45220

1.3 

**Given** a feed of park data is available  

**When** I search for “WLIFUHskvuWHGULDS”  

**Then** I should receive zero results (an empty list)

### Requirement 102: View Park

#### Scenario

As a user interested in going to the park, they should be able to select a specific park to view park information: name, images, description, location

#### Dependencies

Park search data is available and accessible.  

#### Assumptions

Desired locations are in the United States 

Park names / locations are stated in English.  

#### Examples  

1.1

**Given** a feed of park data is available  

**When**  

-	Select the park Eden Park

**Then** I should see general park information including at least one image, an address, a description, limitations, etc.

## Class Diagram

![ClassDiagram](https://github.com/phamrina/Park-Finder/blob/main/Class%20Diagram%20(parkfinder).png)

### Class Diagram Description

**MainActivity:** The first screen the user sees. This will have a list of parks, and an option to search for a different park. 

**ParkDetailsActivity:** A screen that shows details of a park. 

**RetrofitInstance:** Boostrap class required for Retrofit. 

**Park:** Noun class that represents a park. 

**Activities:** Noun class that represents various activities in a park. 

**IParkDAO:** Interface for Retrofit to find and parse Park JSON. 

**IActivitiesDAO:** Interface for Room to persist activity data per park. 

## Product Backlog

- View weather at location
- Save location

## Scrum Roles

- DevOps/Product Owner/Scrum Master: Abhishek Goel
- Integration Developer: Rishabh Sharma, Jaishri Thakur
- Frontend Developer: Paul Provan, Travis Newberry

## Weekly Meeting

Sunday at 5 PM.  Use this Teams:

[Office Hours Teams](https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzYwYzQ3ZGEtNDkzNS00ZTU4LWEzYWItY2UwNzM3YzZkMzJh%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%225e43e7e5-c6e8-44a8-8867-fdf93cf9d11c%22%7d)
