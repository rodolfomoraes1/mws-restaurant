# Restaurant Reviews Project
The goal of this project is to convert a static webpage to a mobile-ready web application, also convert the design to be responsive on different sized displays and accessible for screen reader use. At the end it was added a service worker to begin the process of creating a seamless offline experience for your users.

## Table of Contents

- [Instructions](#instructions)
- [Features Developed](#featuresDeveloped)
- [Authors](#authors)

## Instructions

### Run

1. Download zip file or clone the repository.

2. Start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
3. With your server running, visit the site: `http://localhost:8000`.

## Features Developed
Udacity provided the core of the Restaurant Reviews and most of the work was to adapt to create a responsive design, accessibility for screen readers and offline use (offline first concept).

Most of the activities were:
- Responsiveness
    - change font units to EM and REM
    - use media queries
    - create a responsive css
- Acessibility
    - fix html semantics
    - add aria labels, roles, tabindex and etc, to adapt the screen for screen readers (I did use ChromeVox for this task)
- Added service worker
    - creation of service worker to cache all the necessary information
    - implemented events like activate and fetch to manage the cache

## Authors
This project was started by Udacity team and all later solutions developed by Rodolfo Moraes Martins.