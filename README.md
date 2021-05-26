# The Pea pod

![Logo](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/images/logo.jpg)

Welcome to the Pea pod, this site was developed as a place for cooking enthusiasts to visit and look up new recipes from a database of recipes uploaded by fellow users.
Users have the option of browsing the recipes as a visitor or, if they would like to add some recipes of their own, they can sign up and add, edit or delete their recipes.
Users are requested to browse a partners website to purchase cooking products.

![Responsive Mockup](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/testing/responsive.jpg)

## UX

 ### User Stories
 1. As a user, I want to be able to access a list of recipes.
 2. As a user, I want to be able to search for recipes easily.
 3. As a user, I want to be able to create an account.
 4. As a user, I want to be able to login to my account.
 5. AS a user, I want to add my own recipes to the site.
 6. As a user, I want to be able to update my existing recipes. 
 7. As a user, I want to to be able to delete my existing recipes.
 8. As a user, I want to be able to log out of my profile.
 9. As a user, I want to know where I can source cooking products.
10. As a user, I want to know if meals are suitable for vegans.

 1. As a site owner, I want to able to access an evergrowing list of entries
 2. As a site owner, I want to be able to promote or encourage site users to purchase my products or products from partner sites.
 3. As a site owner, I want to be have control over a database of users that are interested in cooking.

## Design

The website design is simple and responsive to aid the users experience. The design was inpired by the **Code Institute's Task Manager Mini Project** and skills learned from this module, in particular the CRUD functionality.

### Wireframes
I used [Balsamiq](https://balsamiq.com/) to create wireframes for the various pages on different screen sizes.
- [Link to Wireframes](https://github.com/NFox13/MS3-Python-and-Data-centric-development/tree/master/static/wireframe)
![Desktop landing wireframe](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/wireframe/landing_page_dt.jpg) 

### Database
MONGODB is used to store data at the backend. The information required was thought out before creating database and relevant collections.
- [DB Collections](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/mongocollection/mongodb.jpg)


## Features 

The features in this site were included taking the users experience into account. The site is designed to be easily navigated with labelled links availalbe on every page to bring the user to wherever they choose to go.

### Existing Features

- __Navigation Bar__

  - Featured on all pages, the full responsive navigation bar for users that are not logged in includes links to the site name, Home, Recipes and Products. There are also links for the user to register or log and the nabar is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 
  - If a user opts to register they are redirected to their profile page and now have options to add new recipes and log out.
  - Users that are already registered will be redirected to their profile page on logging in and will have options to add new recipes and log out.
  - The navbar collapses to a collapsible menu on smaller devices.

- __The landing page__

  - The landing page includes the navbar, an image of food and a short description on how the site works with link buttons to search the exisitng recipes, register to become a member or if you are already registered then an option to log back in.

- __The recipes page__

  - The recipes page allows the user to search the existing recipes using the search bar that will search text from the recipe name, description and ingredients. Users also have the option to reset the search that will return the full recipe list.
  - The user can click on any recipe in the list to view the recipe and details such as cooking time, serving size, type of cuisine etc. If the user is the author of the recipe then they will have edit and delete options in this section. Additional security has been added to this code to ensure that the user is in session before adding, editing or deleting recipes by altering the url.
  - Users have the option to select if their recipe is vegan and if selected this shows as a leaf symbol on the right hand side in the list to aid users searching for vegan recipes only.

- __The products page__

  - The products page gives the users clickable links to the amazon website where they can browse pots and pans, cooking knives and general cooking utensils which could be used as a way of receiving referral payments from the suppliers. 

- __The register page__

  - The register page gives the user the opportuntiy to register a username and password to join the Pea Pod community.
  - This page also gives the user a clickable link to the log in page if they are already registered.
  - Once the user enters a suitable username and password they will receive a successful register message and be redirected to their profile page. 

- __The login page__

  - The login page gives already registered users the opportuntiy to log in using their username and password.
  - This page also gives the user a clickable link to the register page if they are not already registered.
  - On successful logging in, users will receive a welcome back message and be redirected to their profile page. 

- __The profile page__

  - The profile page displays the current time and a varying greeting to the user depending on the time of day and encourages users to explore the recipes or add a new recipe. 

- __The add a recipe page__

  - The add a recipe page gives the user the various input fields for adding a recipe to the database. Each field prompts the individual information required and advised on the input limits to aid user exeprience.

- __The logout page__

  - The logout button logs the user out of their profile and flashes a succesful log out message while redirecting the user to the log in page. Additional security was added to this code to ensure the user was in session before logging out to avoid casuing an error if the url was altered.

- __The Footer__ 

  - The footer section includes a signature from the author of the site and a clickable link to their github page.
  - The footer is valuable to the author as it encourages users to check out their other work.


### Features Left to Implement

- Other feature ideas would to allow users to upload images of their recipes, maybe a forum to allow registered users to chat to each other or leave comments and also an option to rate the various recipes. 

## Technologies Used
- **HTML**
- **CSS** 
- **JavaScript**
- **JQuery** 
- **Bootstrap**
- **Python** 
- **Flask**
- **Jinja**
- **Balsamiq**
- **PyMongo**
- **MongoDB**
- **Google Fonts**
- **Github**
- **Gitpod**
- **Heroku** 

## Testing
I have carried out extensive testing on the site by going through the site as a visitor, new member and returning member to check all features and links to ensure that they are working as intended.

I have viewed the site on various screen sizes from mobile devices, tablets, laptops and desktop to check how it views on each.

I have loaded the site through various web browsers to test how they work also, namely Google chrome, Mozilla Firefox and Internet explorer.

During testing and following a discussion with my mentor, Felipe Souza Alarcon, who highlighted that by changing the url that he could access the add, edit and delete recipe options. As a result I added additional code to ensure that the user was in session before these options could be accessed.
### Validator Testing
#### HTML
![html validator](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/testing/htmlValidator.jpg)
#### CSS
![css validator](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/testing/cssValidator.jpg)
#### Python PEP8 
![python pep8 validator](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/testing/pythonPep8Check.jpg)
#### Lighthouse performance report
![lighthouse performance report](https://github.com/NFox13/MS3-Python-and-Data-centric-development/blob/master/static/testing/lighthouse.jpg)
#### Unfixed Bugs
There are some css errors highlighting but they are arrising from bootstrap code that I have not altered.