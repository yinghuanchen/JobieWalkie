<h1 align="center">
   <br>
   <a href="https://jobiewalkie.herokuapp.com/#/"><img src="https://github.com/yinghuanchen/JobieWalkie/blob/master/images/jobiewalkie-icon.jpeg" alt="JobieWalkie" width="200">
   <br>
   JobieWalkie</a>
   <br>
</h1>

<h2 align="center">A social networking community for App Academy software engineers.</h2>

<p align="center">
   Created by
   <br>
   <a href="https://github.com/yinghuanchen">Emily Chen</a>
   <br>
   <a href="https://github.com/thomaslgrega">Thomas Grega</a>
   <br>
   <a href="https://github.com/sulizz">Suliz Basnet</a>
   <br>
   <a href="https://github.com/clint-chu">Clint Chu</a>
   <br>
</p>

<p>
JobieWalkie is a collaborated effort to improve the job search process for software engineers, particularly App Academy job seekers. Job searching can be a tedious and/or disorganized task for any occupation where ambiguity in job titles, job descriptions, job requirements, and etc is rampant. The effort becomes more cumbersome as job postings become old or newer job postings, prime listings, are buried in an ocean of links. JobieWalkie is designed to minimize the impact of these issues by aggregating the latest job listings from LinkedIn, filtering job postings relevant to App Academy students' skillset, and providing a peer-to-peer community for networking.
<a href="https://jobiewalkie.herokuapp.com/#/">Live Demo</a>
</p>

<p align="center">
   <a href="#design-and-technologies">Design and Technologies</a> •
   <a href="#features">Features</a> •
   <a href="#how-to-use">How To Use</a> •
   <a href="#features-coming-soon">Coming Soon</a>
</p>

## Design and Technologies

Primarily, built on a MERN stack (MongoDB, Express.js, React, and Node.js), the database is populated by the Puppeteer webscraper API, and the interactive map is powered by the Google Maps API to provide the location of where jobs are located.

Currently, the app provides the latest job postings on LinkedIn, narrowed down to software engineering positions that require tools and technologies such as Ruby, Rails, JavaScript, React, Express.js, Node.js, HTML/CSS, PostgresSQL, and MongoDB (these are the tools and technologies App Academy students know upon graduation).

![main_page](https://user-images.githubusercontent.com/65005487/93142550-d4d18c80-f718-11ea-8219-3737b139ee5f.gif)


## Features
1. User Authentication, BCrypt Hashing
2. Job Listings
3. Debriefs
4. Search (by company)
5. Profile

## How To Use
- The Job Listings page is the primary source for the most recent job listings, on LinkedIn, and related to the skillset taught in App Academy's program. The page is to provide a clean quick look of listings with only a link to the actual listing and a favorite feature. The link to the listing is where you'd go and apply. The "favorite" feature allows a user to save a job listing to their profile for later viewing--listings can be favorited and unfavorited.

- The Debrief page is the source for any debriefs. Users can view other students' authored debriefs sorted by most recent. This page can provide deeper insight to a company's interview process or greater knowledge of what to expect in general.

- Company Page via Search is where users can view all debriefs related to a specific company. In addition to the above in Debriefs, users can author new debriefs and provide feedback on their interview experience. The purpose here is for users to provide valuable feedback to help peers better prepare for an interview or the company itself.

- The Profile page is where users can view favorited job postings as well as any authored debriefs. Users can easily navigate between these items and make any changes.

## Features Coming Soon
1. Database of job postings refreshed daily (automatically)
2. Expanded database to include job postings from other job boards
3. Comments or Questions feature
4. Personal profile customization, such as profile picture, job seeking status, bio, contact, and etc.
5. Friending feature
6. "Like" feature for debriefs, to provide latest and more relevant debrief feed

[Ying Huan Chen]: https://github.com/yinghuanchen
[clint_chu]: https://github.com/clint-chu
[thomas_grega]: https://github.com/thomaslgrega
[suliz_basnet]: https://github.com/sulizz
