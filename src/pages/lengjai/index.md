---
title: Lengjai
date: "2018-10-01T22:40:32.169Z"
skills: "Web development, React, Node, CSS, API calls, databases, graphic design, photography, writing, politics, too many to list"
state: "Continuous improvement"
featuredImage: "./mockup.jpg"
carousel: ['./about.jpg',]
logo: "./about.jpg"
featured: 'yes'
tag: programming
excerpt: An Asian-centric fashion/culture website built using react. Trying to change the world for the better.
background: "This was my first project in React and I wanted it to be a big one"
backgroundColor: "#ef1515"
---

#Stack and features
I'm deploying the frontend using Netlify which also provides SSL support. For my backend I'm using a headless Wordpress and querying content using GraphQL. I have webhooks on Wordpress to trigger a rebuild on Netlify when I upload/update posts. Pushing to my master branch on Github also triggers a rebuild. I'm working with a git flow and develop on the dev branch -> staging branch -> master branch. I have my site configured to dynamically create nodes for new content and new pages. I also built an emoji system to track votes on each article. The votes are stored offshore in my Firebase DB. I have also implemented a commenting system using Disqud. I am using ElasticLunr search for the search bar. I have full-fledged SEO implementation and Google Analytics. I implemented a views count system by pulling data from my Google APIs.

#I had to learn web development first
In between self-learning machine learning and creating small python apps, I started slow with web development. When I realized the great potential I could have with creating my own sites from scratch, I dove straight in and traversed through the horrendously disjointed and convoluted world of starting web development. There's a massive barrier to entry in this field because there are so many different stacks, frameworks, and technologies you can choose from and it takes so much time to learn the advantages and disadvantages of each and every one. I eventually landed on using React and Gatsby as my building tools. 

I set a learning schedule for myself and started teaching myself React from taking online courses, reading documentation, and practicing. After four weeks of studying I was ready to dive into my first and most ambitious project: Lengjai.

#Then I had to learn everything else
Lengjai is not just a website--it's supposed to be the premier source of Asian-centric news, fashion, discussion, and entertainment. This meant I had to learn a super wide-array of skills to bring together a cohesive ecosystem. Here are some of the skills I learned: marketing, graphic design, photography, internal workings of major news companies, heirachal structure, discussion leadership, and branding. I went deep into each of these topics and used many resources to bolster my learning.

#Time management & architecture/roadmapping
The greatest thing I struggled with is time management. I worked very late at my co-op and routinely came home past 8pm. So I had to learn planning and roadmapping. Certain days were allocated to learning a new skill and others were spent building a new feature.

I also laid a roadmap for future development and created my website in mind for future additions, improvements, and styling. Developing this architecture and inital wire frame of my project was extremely difficult for me to grasp at first I had limited knowledge of what I could do in React/JS, but as I got more advanced I could build more modular features with sneaky tricks to get my layouts to play nice with each other. This also meant I had many featured scaled-back temporarily until the time and place is appropriate to bring them to full-scale implementation. 

#CSS is the devil
Okay CSS is pretty amazing for what it is, but I feel like I spent way too much time playing around in CSS versus doing hardcore development, feature implementation, and data analysis. It's a big timesink I kind of wish I could export to someone else, but learning CSS gave me the knowledge of how to think strategically and visualize the structure of things before I even create them.

#Emojis feature
I created an emojis voting system for each article to gauge peoples' reactions. You just click on an emoji and it sends the vote to Firebase. You can only vote for one emoji but you can switch votes and the selected emoji is highlighted. There are more features in my implemented than Disqus's! I'm working on adding cookies so you can't vote more than once.

#Everything else
I do everything else for Lengjai: branding, photography, writing, etc. I recently filed a trademark to protect my brand and am planning on expanding rapidly. 