# Metal World <a href="title"/>
> This is a personal project created in order to learn more about Vue.js, Node.js & Express.js, and MongoDB. 
<p>Welcome to Metal World! Here you will find new bands and you will be kept up with all the new concerts of your favorite artists.</p>
<p>If you got a band, this is the perfect space to spread your work and get new fans.</p>
<p></p>

## Index

 - [Title](#title)
 - [Screenshots](#scr)
 -  [Installation](#ins)

## Screenshots <a id="scr"/>
![home-screen](https://user-images.githubusercontent.com/32981433/62312495-b0f3ae80-b464-11e9-9ad0-37a7039765fb.png) ![home-screen-scrolled](https://user-images.githubusercontent.com/32981433/62312540-ce287d00-b464-11e9-986c-3bcdb497cb13.png)
![person-profile](https://user-images.githubusercontent.com/32981433/62314411-4e50e180-b469-11e9-8157-aac6094a57ef.png)

![band-profile](https://user-images.githubusercontent.com/32981433/62314443-5f99ee00-b469-11e9-96ec-bdd86e709d1d.png)
 ![home-screen-mobile](https://user-images.githubusercontent.com/32981433/62313069-2ca22b00-b466-11e9-964b-4072596fa9f1.png) ![home-screen-mobile-scrolled](https://user-images.githubusercontent.com/32981433/62313301-d41f5d80-b466-11e9-8a1c-da124558f27f.png)
 ![person-profille-mobile](https://user-images.githubusercontent.com/32981433/62313965-5fe5b980-b468-11e9-89f1-31d7a08ecaa5.png) ![band-profile-mobile](https://user-images.githubusercontent.com/32981433/62314131-b4893480-b468-11e9-9529-09249deeeed8.png)


## Installation <a id="ins">

First, you need to  [install Node.js](https://nodejs.org/en/download/). 
Also you will need to have a MongoDB database (you can store databases on the cloud for free with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ).
> This system was developed under the Node's version 8.10.0. Using different versions may cause issues.

Use git to download the source code (if you don't have git installed, you may [get it here](https://git-scm.com/downloads)):

    git clone https://github.com/Paulo-Rozatto/metal-world.git
Enter in the project's directory:

    cd metal-world
   Then enter in the server directory and install the dependencies:
   

    cd server/
    npm install
   Now you need to do the same in the client directory:

    cd ../client/
    npm install
   
   You will need to provide your database URI and a session secret. To do so, create a file called key.js in the directory /server/config/. A boiler plate for the file is provided below:
   

    module.exports  = {
	    mongoURI: 'replace this string with your URI',
	    secret: 'this string can be whatever you want'
	}

Now you should be able to run the application. 
Open a terminal on the server/ directory and execute the following command:

    npm start
   
   Open another terminal, but this time on the client/ directory and run:
   

    npm run dev

Now you just have to open the browser on http://localhost:8080 and you should be able to use the site.


