# Molecule Viewer
> Course: **CIS\*2750**
> Author: **Joel Harder**
> Last Edited: **April 5, 2023**

## About this Project

This project is a Python3 based webserver that utilizes a C library imported to Python using the swig development tool. It is intended for storing and viewing various details about molecules and elements.

To get started, you can upload any molecule (in the official .sdf format). A large amount of these files can be found at: https://pubchem.ncbi.nlm.nih.gov/ by searching for the name of the molecule.

## Compiling
to compile the program type
```bash
make all
``` 
If an issue occurs while compiling, run `make clean` then try again.

## Running
to start the web server use the command 
```bash
python server.py <port#>
``` 
where `<port#>` is the port number you want to host it on.

Once the server is running, open `http://localhost:<port#>/` in your preferred browser. Replace `<port#>` with the port number you used earlier

## Screenshots

### Home Page
![A screenshot of the home page](../img/screenshots/bing_ai_for_dnd.png?raw=true "Home Page")

### Molecule Database
![A screenshot of the page that lists all molecules in the database](../img/screenshots/bing_ai_for_dnd.png?raw=true "Molecule Database")

### Element Database
![A screenshot of the page that lists all elements in the database](../img/screenshots/bing_ai_for_dnd.png?raw=true "Element Database")