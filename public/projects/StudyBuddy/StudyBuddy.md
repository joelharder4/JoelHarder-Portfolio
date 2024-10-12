# Study Buddy
> Author: **Joel Harder**
> Created for: **Hawkhacks 2024**
> Team Members: **Daniel Wang, Kirisan Suthanthireswaran**
> Github: [github.com/DanWang725/Hawkhacks-2024](https://github.com/DanWang725/Hawkhacks-2024)

## Background
This project was created by me and 2 others for the Hawkhacks 2024 hackathon. The hackathon took place in person at Wilfred Laurier University from May 17th to May 19th. We had 36 hours to create a project that would make a positive impact. There wasn't a whole lot of time to sleep, but it was a great experience where I learned a lot and was able to build this amazing project that I am very proud of. A couple of months after the hackathon, in July/August 2024, I came back to the project and continued development of it solo where I basically rebuilt it from scratch.

## Inspirations
As ChatGPT has become an integral part of our daily lives, we found that many were not testing its capabilities effectively. Such a powerful tool is often shunned within the academic space as its misuse has given it a negative reputation. We found that AI could be beneficial to the academic world and we wished to bring light to how its moderate and safe usage can help students study and improve their learning. The arising issue with AI models is that they often provide answers in a short and concise manner, not leaving room for deeper thought and understanding. Notes are difficult to study with, as we become familiar with our habits and methods of studying which leaves us stunted with methods to prepare for upcoming exams. Thus came the idea to integrate AI with our test preparation, allowing it to create intensive and meaningful questions to help us question and reaffirm our knowledge through a new lens.

## What it Does 
Our project "Study Buddy" allows users to upload their notes to our advanced database so that ChatGPT can help develop and create various test questions to help promote their learning. By allowing users to share and explore the test creations of others, our website provides an all-inclusive website that can help them prepare themselves for their future tests and exams. All users have to do is paste (or type) in notes about any subject and Study Buddy will generate a quiz based on the information in the notes.

## Screenshots
![A screenshot of the home page](/projects/StudyBuddy/home_page.png?raw=true "Home Page")
#### *The Home Page*

![A screenshot of the test creation page](/projects/StudyBuddy/create_test.png?raw=true "Create Test Page")
#### *The Create Test Page*

## After the Hackathon
I mentioned in the project background that I came back to the project in July/August 2024 and continued development of the project solo. In reality, it wasn't so much 'continued' as I had to rebuild and redesign the entire application, which I did. It turns out that building an entire full-stack application in 36 hours doesn't produce very clean or efficient code, who would have thought? 

### What changes did I make?
1. Changed the backend from a Python Flask server to a Python FastAPI server since that supports asyncrounous calls to OpenAI API.
2. Built the frontend from scratch and made it visually appealing as well as a much better user experience.
3. Moved the database to a PostgreSQL db hosted on [Neon](https://neon.tech/). Since it is a free tier service, I implemented a sqlite database as a cache to reduce the amount of calls to the database.
4. I added accounts and user authentication to the app.

## How We Built It 
Study Buddy was built from a variety of languages: we used ReactJS for our front end webpages, Python + Flask for our backend, and a MySQL database on a docker image. Early stage planning involved discussion on the design of the database and what information would be integral to be shown to others. 

## Challenges We Ran Into
A large issue that we faced was a lack of documentation to help facilitate communication with the different group members. We ran into difficulties with various users lacking the required dependencies to run certain backend features which led to solo development for certain aspects of the project. We also had troubles in that we only had three group members, meaning each member had to take on additional responsibilities as we completed the project. Another issue that arose was the cost-efficiency of the OpenAI API that we had used, as it led to careful development and cutbacks on the initial scopes of our projects. 

## Accomplishments We Are Proud Off
We were proud that we were able to create a full-stack application that met the expectations that we had set out during our planning phase. By making use of our unique strengths and capabilities, we were able to fit the scope of the project within the limited deadline. We also were proud of our inclusion of AI within our project, as it is an expanding industry that will be integral to the development of future software projects. We also believe that our product can become a successful product, not just a one-off side project without meaning. The project shows off the positive impact that AI can have on the learning and development of our student population and will pave the way for new models that promote learning and understanding, instead of just providing the answer. We are also proud of our dedication to developing intensive and thought-provoking questions. 

## What We Learned?
This project has given us a deeper understanding of AI models and how they can be applied to future projects. We were often intimidated by AI and Machine Learning as it felt like a daunting and difficult beast to tackle. In actuality, we were surprised at the simplicity and detailed documentation from OpenAI and were able to easily grasp and integrate the API into our product. Prompt engineering was another skill that I developed from working on this project. I dedicated lots of time to crafting the perfect prompt to get the highest quality of questions that students would receive from their notes so they could effectively learn from our test questions. 

## What's Next? 
There are a lot of big features that Study Buddy could benefit from in the future; Student profiles allow personal notes to be shared between students in a class. In addition, content organization and filtering tools such as searching could enable easier access to already generated tests for any course. We could also extend the AI to generate a wider variety of test formats, such as short and long answer questions, multiple select, true or false and many other question types. 

We could also upgrade our note uploading system to accept and quiz users from slideshows, PDF files, and images of students' own notes.