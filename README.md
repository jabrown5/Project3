# Project 3: Potty Check

### Deliverables

* __Wireframes__
	*![wireframeimages:homepage](/Project3/pottycheckwireframe/pottycheck/homepage.jpg)
	*![wireframeimages:indexpage](/Project3/pottycheckwireframe/pottycheck/indexpage.jpg)
	*![wireframeimages:option1page](/Project3/pottycheckwireframe/pottycheck/map/option1page.jpg)
	*![wireframeimages:option2page](/Project3/pottycheckwireframe/pottycheck/map/option2page.jpg)
	*![wireframeimages:pottypostpage](/Project3/pottycheckwireframe/pottycheck/map/pottypostpage.jpg)

* __User Experience Description__
	*![user experience story](/Project3/User-Experience-for-Potty-Check)

* __HTML & HBS views__

* __CSS__
	* built on the Materialize framework

* __Scripts__
	* controllers
	* models
	* a main app.js file

* __package.json__
	* various nodes necessary to the construction and operation of the app

* __Sinatra based server__
	* controllers
	* database details
	* migration files

---

### __Technical Requirements__
This application was built as means for individuals to find a nearby restroom when nature calls. The git repository can be downloaded and the client side installed via "npm install" (front-end-v2). Migration files are available for the server side to assist with setting up the corresponding database and tables.  After download, a database titled "pottyproject" with three tables (accounts, restrooms, and comments) must be created. The application must then be connected to the database on the server.

### __App Construction__
This application was built using HTML, CSS, Javascript, Ruby, and mySQL.

__Materialize__ (http://materializecss.com/) provided the framework and allowed for the site to be responsive.  

__Javascript__ (Node JS, Express) allows for users to register, login, logout, and contribute content to the site. Database connections were also built using Javascript (models and controllers).

__Ruby__ The back-end is served by a Sinatra Server and programmed with Ruby.  Here, collaborative behind the scenes activities to manage and direct data flow through the use of controllers and models (Authentication for users, password security, data inputted and stored in sql database)

User passwords are not collected but are instead encrypted and stored in the database using __bcrypt__. Additional security was integrated with the use of API keys.

---

### __Summary__
The  is an app where users can pull up a map set to their location (via Google Maps geolocation) and see nearby, accessible restrooms. Information provided to users includes the address of the location, a cleanliness scale, whether it's publicly accessible, family friendliness, and any gender limitation. Additionally, users can submit a restroom to the site and this information will be added to the list of available restrooms.  Users can also comment on an already submitted restroom and this information will be integrated into the particular restroom's overall rating. 

The content will be user submitted (registered users only) with submitted addresses collected with the assistance of Google Maps Auto complete and latitude and longitude also collected via Google Maps.  The latitude and longitude allow for the posting to be added to the map for future users. 

This content will then be displayed on the 'find' page for registered users and non-registered users to view.  This page locates the user via geolocation and populates nearby potties

#### __Registration__
Users register by creating a unique user name, providing an e-mail address, and creating a password secured using bcrypt.

#### __Login__
Upon return to the site, registered users can login using their username and password (matched to encrypted password using bcrypt). Additional security is provided through the use of an API key.

#### __Posting Content__
Only registered and logged in users can post content - this is confirmed using authentication processes on the Sinatra server side. Added content is extracted and displayed on the 'find' page based on proximity to the user

---

### __Unsolved Problems / Future Work__

- [ ] Attach comments to existing potty posting
- [ ] Click on a potty for in-depth details such as comments submitted by other users.
- [ ] Prevent duplicate potty postings
- [ ] Password reset and forgot username functionality
- [ ] Allow for images
- [ ] Clear forms upon submission
- [ ] Redirects and flow

