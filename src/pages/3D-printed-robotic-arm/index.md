---
title: 3D Printed Robotic Arm
date: "2017-12-30T22:12:03.284Z"
skills: "Design Programming Electronics Sourcing"
state: "Working on improving inverse kinematics and adding computer vision"
featuredImage: "./new1.jpg"
carousel: ["./image4.jpg", "./new2.jpg","./image1.jpg", "./image2.jpg", "./image3.jpg",  ]
logo: "./image4.jpg"
excerpt: "A 3D printed robotic arm that I built myself. I later formed a group to bring it to the next level." 
background: "I made this robotic arm during winter break of 2017. I utilized my
          entire skillset to make this
          project come together."
backgroundColor: "#75d5ff"    
featured: "yes"
tag: robots
---

#Wow, this was a monumental project
I did all the part sourcing, mechanical design, prototyping, and assembly in only 2 weeks. I spent half a day to plan each of the 14 days I had down to the hour. I came up with three game plans, the first was the most aggresive plan that scheduled me to be done with half the programming at the end of the 14 days. The second plan ended me with starting the programming, and the third wrapped me up with starting the electronics. When I was half a day behind the first plan, I jumped to the second, and finally the third.

# Calculating the kinematics by hand
I already had the kinematics and geometric proofs leftover from the first design, check those out here.

# Sourcing
For this project, budget was less of a concern. I wanted things fast, but not too expensive. I scheduled the most crucial items to come first: the stepper motors/drivers, black screws, thrust bearings, ball bearings, and stepper couplers.

# SolidWorks design
I drew sketches with measurements on how big I wanted the overall robot to be. Then I built it all in SolidWorks. I created a second pair of parts with the tolerances for my printer. I performed stress analysis on the parts to see where the stress concentrations are located and designed to reduce them.

#Base rotation mechanism
I'm pretty proud of this novel rotation system I designed. I have a downward facing stepper motor with a coupler secured to a rigid plate. A ball thrust bearing allows the system to rotate with less friction. I later replaced the ball thruster with a needle thruster to further reduce the thickness of the system and increase the spread of weight across a greater area providing very noticeably greater stability. 

#Electronics design
I worked with my friend John Nguyen to create the electronics for the robot. We used an industrial-grade breadboard to house the circuitry. We sourced a cheap 10A power supply the drive the hungry 2A stepper motors. We chose [DRV8825](https://www.pololu.com/product/2133) drivers because they were cheap, accurate, and easy to use. We used the top of the breadboard as the main power rail then split it into individual rails for each driver. We also included a Noctua 12cm fan to cool the drivers down. This is a non-permanent solution, we hope to move away from the breadboard and make a very small integrated solution when the time comes.

#Programming
We developed our software on a small Raspberry Pi 3 using python. We made a simple GUI that controlled axis movement of the robot. This was not enough for where we want to go, so we looked to inverse kinematics. I created group sessions with other members and worked on learning inverse kinematics to control the robot. We developed a rudimentary solution, but the acurracy was too low to be viable. So I reached out to [Alistair Wick](https://www.linkedin.com/in/alistairwick/) and he generously allowed us to use his inverse kinematics algorithmn for our project. John and I dove into his algorithmns and adapted them to be compatible with steppers motors and our project. 

#Iterative improvements
I replaced the 3mm bearings with bushings. Although there is greater friction in rotation, the bushings greatly reduce wiggle.

#Next steps
I haven't worked on this arm in a while because I was in San Francisco for my second co-op. I want to recreate a hand for the arm and from there, I can start doing computer vision programming.