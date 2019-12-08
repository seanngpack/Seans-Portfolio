---
title: 3D-Scanner
date: "2019-11-23"
skills: "Python, Big Data, Numpy, BluetoothLE, Mechanical Design, Fusion360, electronics"
state: "In progress"
featuredImage: "./1.jpg"
carousel: ['./10.jpg', './2.jpg', './3.jpg', './4.jpg', './5.jpg', './6.jpg', './7.jpg', './8.jpg', './9.jpg']
logo: "./1.jpg"
featured: "yes"
tag: robots
excerpt: "My most ambitious project to date"
background: "I subjugated myself to a rigorous design sprint and created an entire 3D scanning system with a streamlined pipeline and robust design"
backgroundColor: "#f274db"
---

## WORK IN PROGRESS !!!

## About

SwagScanner is a 3D scanning system that grabs depth images of an object places on the rotating bed at different orientations and processes the data into a refined pointcloud. I ran my own design sprint to build a very robust system in only 1.5 months in my free time. The software is currently being worked on.

## Features

&nbsp;&nbsp;&nbsp;&nbsp; **Software** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Highly modular system design \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Extensible camera superclass allows use of any depth camera \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Super fast depth deprojection \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Saves pointclouds to files to reduce memory usage \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Iterative closest point algorithm for registration 

&nbsp;&nbsp;&nbsp;&nbsp; **Hardware** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Elegant, integrated design \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Easy bottom-up assembly \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Self-locking gearbox \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rotating bed can withstand high axial & radial loads 

&nbsp;&nbsp;&nbsp;&nbsp; **Electronics** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Custom vertical board design \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Easy hotswapping of motordriver and arduino \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minimized number of cables and cable lengths

## Technical

&nbsp;&nbsp;&nbsp;&nbsp; **Software** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python, C++, PCL,  \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ICP registration \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Voxel grid filtering \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vectorized deprojection using intrinsics \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BluetoothLE Services \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C++ Arduino implementation 

&nbsp;&nbsp;&nbsp;&nbsp; **Hardware** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.2 N-m torque @ 80% efficiency \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Slew bearing for bed rotation \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ~300g PLA filament \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Intel d435 realsense 

&nbsp;&nbsp;&nbsp;&nbsp; **Electronics** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DRV8825 driver \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Arduino 33 iot ble 

## Design process
* weeks 1-2 

  I spent the first couple weeks researching what I was getting myself into. I took a deep dive into how 3D imagig systems worked and the different paths I could take with imaging tech. I also looked into different mechanisms I could use to achieve this. There were so many different paths and I had to narrow down my choices based on some criteria: robustness, quality, implementation feasibility, and size.

* weeks 2-3
  I designed a stacked board housing the electronic components during this timeframe. Again, I had many different paths to take. I knew I wanted a stepper motor, I knew I wanted the electronics to be as simple as possible, and I knew I wanted to use an Arduino to control the stepper. So I choice the DRV8825 to drive my stepper, a small 24 oz-in NEMA 17 stepper. I also wanted the wiring to be very compact and simple so I wired the stepper and arduino on the same powerline. Normally this would require a voltage step-down component such as a linear regulator or switching regulator to step the voltage down from 12V -> 7V for the arduino but I ordered the Arduino 33 iot ble which had a high quality stepping regulator built-in already. It was like solving a puzzle with every step I took because I designed for hot swapping ability, easy disassembly, and simplified cable design and I ended up with a simple and elegant solution to my criteria.

* weeks 3-5
  I designed the entirety of the system housing during these few weeks. There were an endless list of different hardware designs I had drawn up so I decided to pursue my top 3 in parallel and develop them. I ran a design sprint that I call an Darwinian Design Sprint where I pursued viable ideas, developed them, and as they became more grown I weeded out the weaker ones. This design sprint worked well for me because all my initial designs seemed to accomplish my hardware criteria, but my unknown variable was how well I could implement each design so this sprint allowed me to to solve for that unknown. In parallel with creating the designs on Fusion360, I ordered parts to prototype them as they were being worked out. My timeline was concisely laid out, allocating time for design, prototyping, and assembling. I wasted no time waiting for parts to arrive.

* weeks 4-6
  As I was wrapping up hardware design I started learning pointcloud theory and began working on software design. I drew out an extensible and robust system architecture for my project. In this time I learned BluetoothLE design and created my own services and characteristics for bluetooth functionality. I also learned asynchronous design so my system could create threaded workers to listen for notifications from the Arduino. I also learned about depth imaging, pointclouds, and processing algorithms.


## Challenges
At every turn I faced the challenge of deciding what path to take. I utilized decision matrices and weighted the pros and cons of each design before choosing. Many times I would pursue multiple ideas then weed out the weaker ones. I was also constrained to an extremely short timeline. Also, I did everything on my trackpad for fun.

