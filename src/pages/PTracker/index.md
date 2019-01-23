---
title: PTracker
date: "2018-07-10T23:46:37.121Z"
skills: "Full-stack, Flask, Postgres, SQLAlchemy, React/Redux/TS"
state: "Working on price charts"
featuredImage: "./PTracker.jpg"
carousel: ['./PTracker.jpg', './PTracker.jpg', './PTracker.jpg']
logo: "./PTracker.jpg"
featured: 'no'
tag: programming
excerpt: "A price-tracking app for cool goods"
background: "My friend (Nick Seidl) and I combined our passions for photography and computer science into a price-tracking app"
backgroundColor: "#52b71b"
---

###[Click here to see the app](https://p-tracker.herokuapp.com)
###[Nick Seidl's Github](https://github.com/nseidl)

#Stack
PTracker is using Flask as the backend, PostGres as the server, SQLAlchemy as the ORM, and React/Redux/TypeScript for the front-end. We are deploying PTracker using Heroku. Pushes to the master repo triggers a rebuild and updates the front-end. Data is also rescraped on every rebuild. 

#Struggles
This was my first ever collaborate project and coming into this I have very limited programming skills. I had previously only made stand-alone python scripts so I've never worked on a full-fledged deployable project before. Understanding how the full stack worked was challenging because of the sheer amount of information and nuisanced topics. Asking many, many questions and working on each step of the stack helped immensely for fueling my knowledge. 

#What I learned
I gained a much better understanding of both the fundamentals of computer science and designing programs with this project. I learned how to tackle problems from both a top-down and a bottom-up approach. When designing the database, we had to clearly define our problem and outline what data we wanted to collect and what structures we needed to use to hold it. I also learned how to use local development environments to test changes before pushing remotely. This was important because in the beginning I pushed a breaking change, then I pushed a couple more so it was slightly tricky to hunt down what I initally broke.

#Future
I think the most immediate push I want to do is mapping images to each content box. Then I'd like to add buttons to sort the items. If the app becomes popular, I'd either like to move the app away from Heroku or pay for the premium serive because right now the dynos go offline after X minutes of inactiviy, so the first log in after a while is always slow. Also we are limited to 10,000 lines in the PostGres DB hosted by Heroku and we are already near exceeding the limit.
