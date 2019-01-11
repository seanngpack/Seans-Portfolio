---
title: Arduino Robot
date: "2017-06-14T23:46:37.121Z"
skills: "SolidWorks Robotics Arduino Programming"
state: "Finished"
featuredImage: "./1-1.jpg"
carousel: ['./4-1.jpg', './1-1.jpg', './2-1.jpg', './3-1.jpg', ]
logo: "./1-1.jpg"
featured: "no"
tag: robots
excerpt: "This was my first ever project using my 3D printer and creating something from scratch"
background: "Summer break of 2017 I grinded hard to become better at robotics and all the encapsulated disciplines."
backgroundColor: "#b0ddf2"
---

#What is this project
This robot doesn't do much--and that's what I came in to this project expecting. It was my first ever independant project in college and I wanted to use it as a learning oppurtunity. The robot uses an ultrasonic sensor to detect objects closer than a specified distance and then move away from it. Basically it autonomously navigates around my house.

Doing this project taught me many things. I learned a lot about 3D printing, electronics, programming, and part-sourcing. I started by writing down what I wanted the robot to do. Then sketched up what I wanted the robot to look like. I bought 
all the electronics at the cheapest prices I could find on eBay and locally from MicroCenter. As I waited for the parts to arrive. I hacked away at SolidWorks printing the parts and assembling them together.

##Brainstorming
Once I felt ready to tackle this project, I began brainstorming. I sketched what I wanted the robot to do, what I wanted the robot to look like, and how the parts fit together. I had a careful balancing act of aesthetics, size, and printability.

## Tread Design
The treads were very tricky to get right. I had to perform geometric calculations to get the pitch (distance between tread nubs) 
correct. Designing the treads was a valuable lesson in over-shooting tolerances for certain applications. When I increased the hole size for the nubs to fit in, the overall assembly worked much better. If I had to change the design, I would the treads wider for better grip in addition to looking cooler.

## Electronics design
The most challenging part of this project was the electronics. I had minimal exposure working with electronics so I researched the fundamentals online. I chose to use a breadboard solution for quick deployment and prototyping. I also wanted to decouple the Arduino from the laptop so I researched on how to use a battery pack to power the Arduino and motors. I settled on two power sources: one powering the Arduino and one driving the motors. This reduces electrical noise in the circuit because the servos sometimes draw a large spike of current. The battery pack that powers the servos carries a large capacity and I had to step the voltage down from 12.6V to 5V using a voltage regulator. It was really fun using a multimeter to read the currents and voltages.
I chose servo motors to drive the robot because of their reliability and ease-of-use. I could easily mount them and program them to rotate at different directions and speeds. 