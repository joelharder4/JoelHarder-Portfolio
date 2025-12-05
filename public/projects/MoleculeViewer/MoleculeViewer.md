The goal of this project was to develop a full stack application that allows users to upload molecule files, save them in a database, and then be able to view them in three dimensions. 

This is the final project for the course *CIS\*2750* at the University of Guelph, sometimes called *The Angel of Death* for it's reputation as a difficult course.

## Process

The project was divided into four assignments. First I developed a library of functions written in C that established the complex data structures for molecules, performed any necessary mathematical calculations, and enabled for construction and deletion of molecules.

After finishing the C library, I created the SQL database with various tables for elements, molecules, bonds, and more. The database was created and interfaced with using Python and the sqlite3 library. In order to access the functions that I had written in C, I used the [SWIG](https://www.swig.org/) software development tool to connect the Python script to my library.

The next step is to set up the backend for the web server. I accomplished this by utilizing `HTTPServer` and `BaseHTTPRequestHandler` from the `http.server` Python library. I created a `server.py` file using those classes that hosts a local web server to allow network GET and POST requests that will be used by the frontend in the future.

Finally, using HTML, CSS, and Javscript with jQuery, I created a frontend for the web server to allow the user to interact with everything that I have created up to this point. It features a Home page, Molecules and Elements pages to show the user what is in the database, and a View page where it shows the molecule and allows it to be rotated in three dimensions. In addition to everything just listed, it has the ability to parse and generated molecules directly from the official scientific `.sdf` file format.

## Screenshots
### Home Page
Here is what the home page of my web server looks like. I am very proud of the ui design, which I designed in Figma before programming in HTML/CSS.

![A screenshot of the home page](/projects/MoleculeViewer/home_page.png?raw=true "Home Page")

### Element Database
This is the page that shows all of the elements currently in the database and any information associated with them. The Colour1, 2, and 3 are three colours used to display the molecule where it fades from Colour1 in the corner, to Colour2 in the middle, and then fades to Colour3 in the opposite corner.

![A screenshot of the page that lists all elements in the database](/projects/MoleculeViewer/element_database.png?raw=true "Element Database")

### Molecule Database
This page shows all Molecules currently in the database with the option to view or delete them. It also lets you upload new molecules by selecting an SDF file from your computer and giving it a name.

![A screenshot of the page that lists all molecules in the database](/projects/MoleculeViewer/molecule_database.png?raw=true "Molecule Database")

### View Molecules
Here you can view any molecule and input a rotation amount to rotate them.

![A screenshot of the page that displays a caffeine molecule](/projects/MoleculeViewer/view_caffeine.png?raw=true)
![A screenshot of the page that displays a rotated isopentanol molecule](/projects/MoleculeViewer/view_rotated_isopentanol.png?raw=true)


## Additional Information

Since the database is saved to a `.db` file on the disk, the database will be preserved no matter how many times you close and start the server.

You can find and download `.sdf` molecule files from [here](https://pubchem.ncbi.nlm.nih.gov/). Additionally, the molecules don't have to be real so you can create your own as long as you format it properly!

If you want to download and try it for yourself, you can go to the [Github Repository](https://github.com/joelharder4/MoleculeViewer/) and clone it. Read the `README.md` file for instruction on how to compile and run it. You may have to install additional programs like [SWIG](https://www.swig.org/) and some of the Python libraries.