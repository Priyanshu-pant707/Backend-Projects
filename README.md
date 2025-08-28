# Backend-Projects upcoming Projects



### Project Ideas 

Ok. I'm going to list off some ideas for projects. You will have to determine if any particular idea is good enough to include in a portfolio. These aren't creative ideas. They likely already exist. Some are way too advanced while others are simplistic. 

I will recommend to post any project you make to github and make a github project page for it. Explain in as much detail as possible how you made it, how it can be improved etc. Document it. 

If you pick an advanced idea, setup a development roadmap and follow it. This will show some project management skills. 

Another piece of advice for those who are design challenged. Use different front end frameworks and use different themes for those frameworks to provide appealing designs without looking like yet another bootstrap site. 

Here's a long list of front end frameworks : ~~http://usablica.github.io/front-end-frameworks/compare.html~~ This list is out of date.  Quickly updated list is here : https://gist.github.com/MWins/250000f187bdbdd7e2757d50be8507d5

Trying to focus on back end projects overall. But some of these are front end related.  Some of these are going to require a user system of some type. As a single user application they would not be much better than a 'to do list' application. 

* MyTop100Movies - API,Database,CRUD - Application which lets users set their top 100 movies. Movies could come from an API like The Movie Database (http://tmdb.org). Should allow for users to add a movie, list and rank their movie selections. Start with basic CRUD for movies and add features. 

* InspireMe/MemeMaker - Stand alone service to put text over images like those inspirational posters with quotes. Alternate idea is to use blank meme images and let them add their own text to it (numerous sites exist for this). For the first you need quotes and images , here's a gist [free stock image sites](https://gist.github.com/MWins/1773ff0c38e7d88d1422). Use google for blank meme images and/or quotes. 

* ScheduleMaker - This one's harder. Can develop the database schema or an application. Let one user define the schedule for others. Or let users select their own schedule. 

* RSS Picker - Use an RSS library like SimplePie and provide the ability to add multiple RSS feeds and let the user pick specific news items from the aggregated list. Does not require a user system. 

* GIST Clone - Requires user system(single would work). Create a system like github's Gist which allows a user to create a page from markdown syntax. 

* Drag And Drop Newsletter Builder - This tutorial : http://simbyone.com/drag-and-drop-newsletter-builder-using-jquery/ lacks a back end for storing newsletters. Create one to mesh with the front end. 

* College Scoreboard - data.gov provides a 'college scoreboard' API. Use this API to build a site where users can select various schools in their area. https://catalog.data.gov/dataset/college-scorecard

* PetFinder Widget - Take the data from the PetFinder API and provide either a service or script that allows other site owners to insert it into their websites. https://www.petfinder.com/developers/api-docs

* Micro Tweet - Wordpress plugin. This idea mimics what ESPN has setup for its authors. The plugin would let any Wordpress author post a tweet which would appear on the front of the wordpress website (or within a widget). 

* Weather Logger - Build the standard weather widget API project but add the ability to log the current weather data and to view historical data. Bonus points if it's accessible programmatically. https://www.ncdc.noaa.gov/cdo-web/webservices/v2

* Micro PHP Framework Web Site - Build a simple (<10page) website using a php micro framework like Slim or Silex.  Could also be used to build your portfolio. Can make it file based, database, or a light database like sqlite.

* Faceted Search/Navigation.  This is the advanced search/filter functionality available on many sites. It's a design pattern.  Can read about it here : http://alistapart.com/article/design-patterns-faceted-navigation . Implement it on the back end and the front end if you're bored.

* oAuth Login - Recommend this one because it can replace a user system in some of these examples. Numerous libraries exist for setting this up. 

* Simple CRUD sites - Create, Read,Update,Delete (read includes list).  Possible 'objects' could be Dog Breeds, any type of pet, plants, flowers etc. Level of detail is up to you.  Locations like Museums, National Parks. Events like music festivals is another possibility.  Data Model sample for Events : http://www.databaseanswers.org/data_models/enterprise_data_model_for_events_and_exhibitions/index.htm

* RESTful API - use the same list from the CRUD sites but make it available as an API. 

* Build some Data Models - People of importance or historical, whichever you like.  Can use http://databaseanswers.org as a starting point with people and citizen data models : http://www.databaseanswers.org/data_models/people.htm  , http://www.databaseanswers.org/data_models/citizens/index.htm

* Local Government Data Model - Did not see this particular data model on databaseanswers.org. Include titles,positions, elected or appointed positions etc. 

* Data Models for MySQL - Create a site for MySQL data models like databaseanswers.org. Could be a long term project. 

* Localhost Image Upload - Make a file upload script for use with wifi only devices (cellphones w/o service). Image upload and browsing of photos.

* GistList - Frontend and simple. Make a javascript application to work with the github Gist API to display all of a user's gist with links. Could add ability to sort or filter. https://developer.github.com/v3/gists/ for the API docs and could use vue.js for filtering using this intro to vue.js : https://www.youtube.com/watch?time_continue=1755&v=VPUdtEf3oXI

* File Directory - Provide an admin user with the ability to upload files for the public. Like PDFs, Word Docs, whatever. Can be simple or advanced.  (Comparable but more useful IMO than FreeCodeCamp's File Metadata Microservice : https://www.freecodecamp.com/challenges/file-metadata-microservice)

* Image Search - FreeCodeCamp calls this Image Search Abstraction Layer which sounds complicated. Instead of interfacing with a 3rd party, make it search a defined path on the local file system. FCC's description : https://www.freecodecamp.com/challenges/image-search-abstraction-layer

* Time API - One more from FCC : https://www.freecodecamp.com/challenges/timestamp-microservice make this available as an API and add options like setting the Time Zone. 

* Workflow Application - Design a system which requires interaction between users. Simplest example would be author > editor with the object being passed is an article. Author submits article, editor approves or rejects it. Can find other examples of this type of process in other fields. 

* Simple Property Rentals - Application for single user to offer rental properties. Database model, multiple CRUD objects and make it self hosted. 

* Database Model/Schema -  Go to http://databaseanswers.org, pick a model and convert it to MySQL. 

* Personnel or Business Directory - Create database model/backend for a company directory. 

* SVG Floor Plan - Front end, but use SVG to create a floor plan layout type application. 


---------------------

* Codepen/JSFiddle w/ revision history - Clone of codepen.io or jsfiddle with the ability to view different versions and most important, ability to link to versions. Would allow for tutorials to show steps in development of a project.

* Codepen/JSFiddle to Github/BitBucket - Automate the process of moving a code example from the 'live editors' to a source code control repo. 



Should have something that works with Google Maps but outside of standard 'you are here' and 'mcdonalds is there' type stuff, I don't have any ideas. Any suggestions welcome. 

Forgot to add links to public APIs which could provide more ideas and/or data sources. 

https://www.publicapis.com/

https://github.com/toddmotto/public-apis

https://catalog.data.gov/dataset?q=-aapi+api+OR++res_format%3Aapi#topic=developers_navigation

https://www.programmableweb.com/apis/directory

Just adding design site ideas so I have all this info in one place. 


### Types of sites for design practice work : 


* blog - centered on a current media property (TV,Music,Whatever)
* blog full - front page, post single page, category or archive view
* single product website - [example landing page idea](https://www.reddit.com/r/web_dev_help/comments/5pukmx/portfolio_project_idea_list/dfdj5c7/)
* full product website
* service company (without major functionality, just basic info)
* single page promotion - treat as stand alone brand w/o ability to order the product or promotion
* organization website - little bit more advanced, should contain a limited directory of personnel 
* Event website - without checkout functionality but should include directions to location, date, vendor contact if applicable






### Front End - Design/HTML/CSS

####**Task:** Computer Landing Page 

Go to http://dell.com and pick a computer. Build a landing page for pre-orders of this PC. Can use images and copy from dell.com. 

#### Requirements

Single page only. 

Layout sketch of the page (MS Paint is ok).

No more than 1/4 of the page may be technical specifications. 

It must have a CTA (call to action) and preferably a secondary CTA. 

Javascript FX are  optional.  

Must establish 2 goals for the site (1 is obvious: pre-orders).



###Front End - CSS - Skill Level medium-low. 



#### **Task:** Quarter Grid System 

Build a grid system which has 4 sizes of columns. 1/4,1/2,3/4,4/4 or full size. Note full size does not mean full width of the viewport so add a class to handle it. 

Grid does not have to be nest-able.  It must be responsive. Flexbox would be preferred method (until grid is supported by more browsers). Grid system should include offsets. 





SVG Cartoon Maker - what can you do with SVG ?




Implement wikidata data model into a database schema.
Create CRUD app for the schema. Reference wikidata Data Model : https://www.mediawiki.org/wiki/Wikibase/DataModel/Primer

https://www.mediawiki.org/wiki/Wikibase/DataModel/JSON

https://www.wikidata.org/wiki/Wikidata:Main_Page







HTML Practice - Follow this google search link - [ Search for Project Reporting  Form](https://www.google.com/search?q=Project+Reporting+Form&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjx4bXtqNHSAhWJ6SYKHQCiA7gQ_AUICCgB&biw=1280&bih=881#imgrc=_) , pick one or more forms and implement as HTML. 

 **Make sure it works for print.** Using `table` for these is acceptable. Have to decide if having it responsive is important. Consider if responsive the form could be placed in a fixed width container for display which would allow for full paper size printing. 





Teach CSS Positioning - Don't have a cool name for it but the basic concept is a webpage which allows a visitor to change basic positioning rules for type (absolute,fixed,static,relative), modify additional rules like margin,padding which alter the position, and add additional content to show how it interacts with the page. 

Concept has potential for adding features over time and should demonstrate CSS knowledge and javascript skill. 



[Wordpress] - Statica , a Wordpress starter theme for brochure web sites.  Create a wordpress theme which only has the page template. It removes all comments,archives,image handling pages. It would be a stripped down version of a starter theme. 

Idea comes from multiple threads about starter themes including unnecessary code. 






Front End - content checker for common errors. 

Use javascript to highlight common mistake words like there vs their vs they're in an article. Can develop it so it has modes which run different checks beyond the basic word check. 





Property Loss Archive - In case of a disaster, it is a recommend practice to photograph your home to catalog your possessions. 

Using this as a guideline, the web app would list standard rooms with ability to add more rooms. UI would present the list of rooms with a file upload control and thumbnails of existing images. Ability to date the collection is important. 







SQL - create a sandwich database schema. Standard sandwiches offered plus ability to add/remove ingredients and special instructions. 

Application - create order system for a sandwich shop. 

Idea from this thread : https://www.reddit.com/r/mysql/comments/5pzkpf/how_to_efficiently_design_a_restaurant_menu/















