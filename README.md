# Final Exam - Supplier Management

#### Author: Hao Ye
#### Student ID: 6238023

This project is a web application for managing suppliers, built using mongoDB and next.js. The web page is hosted on Vercel. You can view the finished product here [Supplier Management](https://final-exam-6238023.vercel.app/suppliers)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [CodeDetail](#codeDetail)
- [Features](#features)
- [Conclusion](#conclusion)


## Installation

- Clone the repository onto your local machine using `git clone`;
- Create a new repository on GitHub and connect it with the files downloaded in the previous step;
- Import the GitHub repository into Vercel to create a new project;
- After that, you can directly access the webpage through Vercel, and any changes made to the code will be automatically synchronized to the website.

## Usage

To use the application, simply navigate to the webpage on Vercel and follow the instructions provided.

## CodeDetail

- Most of the modification of this code comes from the blogs code in the class;
- Added UI with blue tint;
- Modify the method `fetch` to `axios`, because using `fetch` can never read the data in the database in vercel (from ChatGPT);
- Added a method to sort by supplier name in `/suppliers/index.jsx`.

## Features

- Add new suppliers;
- Edit existing suppliers;
- Delete suppliers;
- View a list of all suppliers;
- List suppliers by name.

## Conclusion

This web page fulfills all the required functions.
