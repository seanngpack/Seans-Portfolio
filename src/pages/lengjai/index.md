---
title: Lengjai
date: "2018-10-01T22:40:32.169Z"
skills: "Web development, React, Node, CSS, API calls, databases, graphic design, photography, writing, politics, too many to list"
state: "Continuous improvement"
featuredImage: "./mockup.jpg"
carousel: ['./about.jpg',]
logo: "./about.jpg"
tag: [featured, programming]
excerpt: An Asian-centric fashion/culture website built using react. Trying to change the world for the better.
background: "I'm pretty socially concious and active in political discussions. I wanted to create my own platform to change the conversation."
backgroundColor: "#ef1515"
---

#Stack and features
The frontend is deployed using Netlify which also provides SSL support. I'm using Wordpress as my content manager and querying posts using GraphQL. I have webhooks trigger a rebuild on Netlify when I upload/update posts on Wordpress. Pushing to my master branch on Github also triggers a rebuild. I'm working with a git flow and work on the dev branch -> staging branch -> master branch. The content is dynamically added to its appropriate place and pushes stuff out of the way. Pages are dynamically generated. I created an emoji system to track votes on each article. I am using Disqus to allow comments. I am using ElasticLunr search for the search bar. In the back I have full-fledged SEO implementation and Google Analytics. I am using several Google APIs to pull data. I am using the analytics-reporting API to display the pageviews of each article.

#I had to learn web development first
In between self-learning machine learning and creating small python apps, I started slow with web development. When I realized the great potential I could have with creating my own sites from scratch, I dove straight in and traversed through the horrendously disjointed and convoluted world of starting web development. There's a massive barrier to entry in this field because there are so many different stacks, frameworks, and technologies you can choose from and it takes so much time to learn the advantages and disadvantages of each and every one. Then comparing them to each other is arduous and time-consuming. I eventually landed on using React and Gatsby as my building tools. 

I set a learning schedule for myself and started teaching myself React from taking online courses, reading documentation, and practicing. After four weeks of this I was ready to dive into my first and most ambitious project: Lengjai.

#Then I had to learn everything else
Lengjai is not just a website--it's supposed to be the premier source of Asian-centric news, fashion, discussion, and entertainment. This meant I had to learn a super wide-array of skills. To list a few, I learned: marketing, graphic design, photography, internal workings of major news companies, heirachal structure, discussion leadership, and branding. I'll probably go deeper into these topics in another discussion, there is just so much information I internalized I cannot write it all down in a condensed paragraph.

#Time management & architecture/roadmapping
The greatest thing I struggled with is time management. I worked very late at my co-op and routinely came home past 8pm. So I had to really learn architecture. I architected my life schedule and created a development and learning plan. Certain days were allocated to learning a new skill and others were spent building a new feature.

I also architected in the sense that I laid a roadmap for future development and created my website in mind for future additions, improvements, and styling. This was extremely difficult for me to grasp in the beginning because I had limited knowledge of what I could do in React/JS, but as I got more advanced I could build more modular features with sneaky tricks to get my layouts to play nice with each other. This also meant I had many featured scaled-back temporarily until the time and place is appropriate to bring them to full-scale implementation. 

#CSS is the devil
Okay CSS is pretty amazing for what it is, but I feel like I spent way too much time playing around in CSS versus doing hardcore development, feature implementation, and data analysis. It's a big timesink I kind of wish I could export to someone else, but learning CSS gave me the knowledge of how to think strategically and visualize the structure of things before I even create them.

#How I learned so fast
I did a lot of things to learn as fast as possible. I used only the most recommended resources by authorative figures because learning from the best resources typically yields better results and less time wasted searching for new learning material. I supplemented a lot of gaps in my learning by reading material more narrow in scope. I found out that at the volume I was consuming information, I needed more time in the day so I pushed back my bedtime several hours. I took the time in the train to take naps to compensate for that. On the weekends I would have crazy power sessions working for 16 hours a day. It sounds like a lot of working, but I love learning so I was never really fatigued by this.

#Emojis feature
I created an emojis component as a voting system for each article to gauge peoples' reactions. You just click on an emoji and it sends the vote to Firebase. You can only vote for one emoji but you can switch votes and the selected emoji is highlighted. There are more features in my implemented than Disqus's! I'm working on adding cookies so you can't vote more than once.