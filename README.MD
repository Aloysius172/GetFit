## Background and Overview
GetFit is a personal fitness application with social functionality that allows users to create personalized workout regimens from a wide selection of exercises. The app organizes exercises by muscle group(s) and workout type and allows users to build their own routine by customizing duration, weight and reps for each exercise. Once a user has created and named a regimen it will be publicly available for other users to see, like, comment and add to their own personal calendar.

Only the original creator of a regimen can edit or delete it once it has been created. By adding these workout routines to their personalized calendar user's will be able to keep track of their own and other's workouts.

Additional features would expand on the calendar to include daily logs that let users check exercises off their workout regimen at the end of each day and add their own daily comments. A visual search for exercises using a body diagram could also be implemented at a future point to create a more intuitive way for user's to find the exercises they're looking for.


## Functionality and MVP
1. Hosting on Heroku
2. User Authentification
3. Exercises
* Index for exercises also sorted by muscle group it works.
* Show page for each exercise with further information.
4. Regimens 
* add/update/delete(CRUD) exercises to a regimen
* Allows users to add exercises to their own customized regimen
* Allows users to scale workouts.
* User regimens can be copied by other users onto their own calendar.
5. Comments/Likes
* Users will be able to comment and like other users workout regimens
* Comments can be updated and deleted
6. Calendar
* Allows users to assign regimens to specific dates.
* Regimens can be added/edited and deleted before the date of the scheduled workout.
7. Production README
BONUS
8. Interactive body diagram
* Muscles can be selected that link to an index of exercises that work said muscle
9. Daily Logs
* A record of workouts from days past to keep track of what you have done.
* On the day of your workout, users have the ability to check off exercises on their regimen as the workout and leave comments on the days workout.

##Technologies and technical challenges
* React
* Express
* MongoDB
* Node.Js
* Exercise.db(API)
* React Calendar Library(TBD)
* Intergate exercise gifs

* Successfully implementing a git workflow for multiple features simultaneously
* Structing our database to fit our project needs.

## Group Members and work Breakdown
Aloysius(Lead), Carlos(Frontend), Freddy(Backend), Jacob(Flex Lead)

### Day 1
* Front and Backend Of User Auth as well (All)
* API integration for exercises (Freddy)
* Index and show pages for exercises add exercise gifs  (Carlos, Jacob)
* skeleton for splash/login page with some styling. (Alo)
### Day 2
* Personal user pages (Carlos, Alo)
* Backend for Regimen (Freddy, Carlos)
* Form to create regimen (Jacob)
* Styling (All)
### Day 3 
* Finsish CRUD functionality for regimens (All)
* Create backend for likes and comments for a regimen (Freddy)
* Component form for adding like and comments (Alo)
* Likes and number of comments rendering underneath a regimen (Carlos, Jacob)
* Regimen show page including all of its like and comments (Carlos, Jacob)
### Day 4
* Calendar library intergration (Freddy/ Carlos)
* Allow users to set regimeens to calendar (Carlos/ Freddy)
* Render calendar compnent on a users show page(Alo, Jacob)
* Finalize styling(Jacob, Alo)
* Troubleshooting(All)




