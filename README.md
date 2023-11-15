# Pure Match Take Home Challenge

## Overview
This app is a back-end application developed as part of a technical challenge. It uses Express.js for the backend, PostgreSQL for the database, and integrates with AWS S3 for image storage. The application allows users to register, log in, create and manage posts.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- PostgreSQL
- AWS S3 Bucket

### Installing
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database
4. Configure AWS S3 bucket details in the environment variables
5. Run the application: `npm start`

## Features and Implementation

### Requirement 1 (Branch: `feature/req1`)

#### Features:
- User registration and login with JWT authentication.
- Users can create posts with a description and a photo.

#### Implementation Details:
- **Express.js and PostgreSQL Setup:** Configured Express.js with Sequelize ORM for PostgreSQL integration.
- **User Authentication:** Implemented user registration and login endpoints. Passwords are hashed using bcrypt. JWT is used for maintaining user sessions.
- **Post Creation with S3 Integration:** Users can create posts with text and a single image. The image is uploaded to an AWS S3 bucket.

### Requirement 2 (Branch: `feature/req2`)

#### Features:
- Posts show a timestamp indicating how long ago they were created.
- Posts can have multiple photos (up to 5).
- Posts' descriptions are editable.

#### Implementation Details:
- **Time Difference Calculation:** Used Time.now() to calculate and format the time difference.
- **Multiple Photo Uploads:** Modified the post model to handle multiple images (up to 5).
- **Editing Posts:** Added an endpoint to edit the description of existing posts.

- ### Requirement 3 (Branch: `feature/req3`)

#### Features:
- Pagination in post listing.
- Users can add friends.
- Friends List endpoint includes mutual friends count.

#### Implementation Details:
- **Pagination:** Implemented pagination in the posts endpoint using query parameters for page and limit. Used Sequelize limit and offest parameters to calculate 
- **Friendship Feature:** Added a new model for friendships and endpoints to add and list friends.
- **Mutual Friends Calculation:** Enhanced the Friends List endpoint to calculate and return the number of mutual friends.

## Testing
- Run automated tests: `npm test`
- Postman collection is provided for API testing.

#### Postman Screenshots:
<p align="center">
<img width="750" alt="signup1" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/a9247f00-1668-415f-9236-5affd4f67326">
<img width="750" alt="signup2" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/d853c13e-59c6-4c78-90a5-2eec1e431908">
<img width="750" alt="signin1" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/dab798c8-a49e-41f5-b0a7-d9f381082bea">
<img width="750" alt="signin2" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/7831c39c-2bae-4d7d-ae52-5980bf399de9">
<img width="750" alt="signin3" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/927e52e2-ed93-40c0-88ec-197f185aa2e1">
<img width="750" alt="post1" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/3d8a5bf4-61b8-488b-8326-9583fe2cba7c">
<img width="750" alt="post2" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/9764bae1-1b22-4600-a754-c8eae0e921f0">
<img width="750" alt="post2" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/0a43fd79-c189-4e43-a293-d94a2dcfd5fa">
<img width="750" alt="post4" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/217963a4-e989-4444-bee1-4108a300855c">
<img width="750" alt="pagination1" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/d62efa5d-ef77-4e30-a42f-9c99e8fb1058">
<img width="750" alt="pagination2" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/0900ce58-7e54-48b0-8d16-fefcc1393378">
<img width="750" alt="friends1" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/bb37f8b4-8bb5-44bb-804c-f102e29367f9">
<img width="750" alt="friends2" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/6a939386-1029-44db-998f-91af9075014a">
<img width="750" alt="Screen Shot 2023-11-14 at 8 34 34 PM" src="https://github.com/ryancanton/PureMatchTakeHomeChallenge/assets/113324661/b60d7d14-ec17-427d-b04d-0dafecb34a4d">

</p>


## Responsible Parties

| [<img alt="Ryan" width="75" src="https://media.licdn.com/dms/image/D4E03AQFAbg5Mt0mzHw/profile-displayphoto-shrink_200_200/0/1667417343436?e=1682553600&v=beta&t=RhEB2cemwMoMrLFIRoWxoo0rJtC_E2p49IKcCgj7Vew"/>](https://www.linkedin.com/in/ryan-canton-6a4854255/) |
| ----------- |
| Ryan Canton |
| [GitHub](https://github.com/ryancanton) | 
| [LinkedIn](https://www.linkedin.com/in/ryan-canton-6a4854255/) |

