# 3D Shape Controller (Three.js)

A simple interactive web project that demonstrates how to create and control **3D shapes in the browser using Three.js**.
Users can generate different shapes (Cube, Sphere, Cone) using buttons, and the shapes are rendered in a 3D scene with lighting and animation.



## Project Overview

This project was created to explore the basics of **Three.js** and understand how 3D graphics can be displayed and manipulated in a web environment.

The application allows users to:

* Create different 3D shapes with button clicks
* Render shapes inside a 3D scene
* Apply lighting for realistic shading
* Animate the shapes with smooth rotation

The goal of this project is to demonstrate the **core components of a Three.js application**, including scenes, cameras, renderers, geometries, materials, and animation loops.



## Features

* Interactive buttons to generate shapes
* 3D rendering using Three.js
* Automatic shape rotation animation
* Directional and ambient lighting
* Clean and minimal UI design
* Responsive canvas rendering



## Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling and layout
* **JavaScript (ES6 Modules)** – Application logic
* **Three.js** – 3D graphics rendering library



## Project Structure


project-folder
│
├── index.html      # Main HTML structure
├── style.css       # UI styling
├── script.js       # Three.js logic and interaction
└── README.md       # Project documentation



## How It Works

1. A **Three.js Scene** is created to hold all 3D objects.
2. A **Perspective Camera** is positioned to view the scene.
3. A **WebGL Renderer** draws the 3D scene on a canvas inside the webpage.
4. **Lighting** is added to create realistic shading.
5. When a user clicks a button:

   * The previous shape is removed.
   * A new geometry (Cube, Sphere, or Cone) is created.
   * The geometry is combined with a material to form a mesh.
   * The mesh is added to the scene.
6. An **animation loop** continuously rotates the shape and renders the scene.



## Getting Started

1. Clone the repository


git clone (https://mugheesazhar.github.io/3js-task.git.io/)


2. Open the project folder.

3. Run the project using **Live Server** in VS Code or open `index.html` in a modern browser.



## Learning Goals

This project helped practice:

* Understanding the basic **Three.js architecture**
* Working with **3D geometries and materials**
* Managing **interactive UI events**
* Implementing **animation loops**
* Rendering real-time graphics in the browser



## Future Improvements

Possible enhancements for the project include:

* Adding mouse controls for rotating the scene
* Allowing multiple shapes in the scene
* Adding color customization for shapes
* Implementing more complex geometries
* Improving UI animations and design



## Author

Mughees Azhar
