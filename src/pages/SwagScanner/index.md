---
title: SwagScanner
date: "2019-11-23"
skills: "Python, Big Data, Numpy, BluetoothLE, Mechanical Design, Fusion360, electronics"
state: "In progress"
featuredImage: "./1.jpg"
carousel: ['./10.jpg', './2.jpg', './3.jpg', './4.jpg', './5.jpg', './6.jpg', './7.jpg', './8.jpg', './9.jpg']
logo: "./1.jpg"
featured: "yes"
tag: robots
excerpt: "My most ambitious project to date"
background: "A 3D scanner system created from the ground up using 3D printing, Arduino, Python and C++. Utilizes depth images to create virtual models of scanned objects."
backgroundColor: "#f274db"
---

## Status: 
Currently working on writing iterative closest point algorithm by hand

## Find out more here: 
https://github.com/seanngpack/swag-scanner

## About

SwagScanner is a 3D scanning system that grabs depth images of an object places on the rotating bed at different orientations and processes the data into a refined pointcloud. I ran my own design sprint to build a very robust system in only 1.5 months in my free time. The software is currently being developed.

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

  I spent the first couple weeks researching what I was getting myself into. I took a deep dive into how 3D imaging systems worked and the different paths I could take. I also looked into different mechanisms I could use to achieve this. There were so many different paths and I had to narrow down my choices based on some criteria: robustness, quality, implementation feasibility, and size.

* weeks 2-3

  I designed a stacked board housing the electronic components during this timeframe. Again, I had many different paths to take. I knew I wanted to use a stepper motor,electronics to be as simple as possible, and use an Arduino to control the stepper. So I choice the DRV8825 to drive my stepper, a small 24 oz-in NEMA 17 motor. I also wanted the wiring to be very compact and simple so I wired the stepper and arduino on the same powerline. Normally this would require a voltage step-down component such as a linear regulator or switching regulator to step the voltage down from 12V -> 7V for the arduino but I ordered the Arduino 33 iot ble which had a high quality stepping regulator built-in already. It was like solving a puzzle with every step I took because I designed for hot swapping ability, easy disassembly, and simplified cable design and I ended up with a simple and elegant solution to my criteria.

* weeks 3-5

  I designed the entirety of the system housing during these few weeks. There were an endless list of different hardware designs I had drawn up so I decided to pursue my top 3 in parallel and develop them. I ran a design sprint that I call an Darwinian Design Sprint where I pursued viable ideas, developed them, and as they became more grown I weeded out the weaker ones. This design sprint worked well for me because all my initial designs seemed to accomplish my hardware criteria, but my unknown variable was how well I could implement each design so this sprint allowed me to to solve for that unknown. In parallel with creating the designs on Fusion360, I ordered parts to prototype them as they were being worked out. My timeline was concisely laid out, allocating time for design, prototyping, and assembling. I wasted no time waiting for parts to arrive.

* weeks 4-6

  As I was wrapping up hardware design I started learning pointcloud theory and began working on software design. I drew out an extensible and robust system architecture for my project. In this time I learned BluetoothLE design and created my own services and characteristics for bluetooth functionality. I also learned asynchronous design so my system could create threaded workers to listen for notifications from the Arduino. I also learned about depth imaging, pointclouds, and processing algorithms.

## Software design

### Entry Point
First, we define the entry point of the application `scan.py` and create a `Scan` object to handle abstracting each major steps in the scanning pipeline to be run sequentially (note: not all actions are synchronous in SwagScanner!)

### Camera()
The `Camera()` class is a superclass that can be extended to provide ability to use any depth camera. Looking at the `D435` object, we override the `get_intrinsics()` method with RealSense API calls to get the intrinsics of the camera.

### Arduino()
The `Arduino` class provides methods to initialize the Arduino and send bluetooth commands to it. We subscribe to asynchronous notifications from a custom bluetooth service which provides table state information.

### DepthProcessor()
This class is a class factory builder that takes in a `Camera()` object and a `boolean` flag and returns either a fast or slow depth processing unit. Using the fast unit, we gain the ability to use `deproject_depth_frame()` with vectorized math operations for point to pixel deprojection. The slow unit utilizes a **much (300x)** slower double for loop to perform that task. One drawback with the fast deprojection method is that it does not account for any distortion models in the frame. If you are using Intel depth cameras that is OK because the developers advised against that since distortion is so low. The same may not be true for the Kinect however. Subclass the `DepthProcessor()` object and override the `deproject_depth_frame()` method if you would like to include your own distortion model.

### Filtering()
This provides the tools to perform voxel grid filtering, downsample our pointcloud by the `leaf_size` parameter, and save it. This step is essential for registration because performing registration on a massive pointcloud would take a very long time to converge. One more thing we have to do in filtering is to segment the plane from each pointcloud. We run the RANSAC (random sampel concensus algorithm) and fit a plane model (ax + by + cz + d= 0) to our cloud and detect the inliers. Using the inliers and plane model, we can reject those points and come out with a pointcloud without a the scanning bed plane. This is essential to do before registration so that we don't take a subset of the cloud belonging to the plane and encounter a false-positive icp convergence.

### Registration()
The `Registration()` class provides the tools to iteratively register pairs of clouds. Using global iterative registration, we define a `global_transform` variable as the identity matrix of size 4x4. Then we apply the iterative closest point algorithm to a a source, target cloud pair and get the source -> target cloud transformation as a 4x4 transformation matrix. Then we take the inverse of that matrix `transf_inv` to get the transformation from target->source. We multiply the target by the global transform (remember: this is the first iteration, the `global_transform` is still identity) to get the target cloud in the same reference frame as the source and save the cloud. Then we dot product `global_transform` and `transf_inv` to update the global transformation. Move on to the next pair of clouds and repeat. 

## Challenges
There were a lot. Namely, time was a massive constraint and I had to make smart decisions at every turn to avoid wasting time and proceeding with development.

