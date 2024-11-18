# Flood-Relief-and-Emergency-Services-Dispatch-System
# Overview
The Flood Relief Emergency Response System is designed to efficiently manage emergency services during floods in Mangalore. The system prioritizes incoming requests, tracks dispatched services, and handles invoices and logs for auditing. It leverages Priority Queues for urgent requests, Stacks for service tracking, and File Handling for data storage and reporting.

# Features
Priority Queue: Ensures life-threatening emergency requests are processed first.
Service Tracking: Uses Stacks to track dispatched services, allowing easy reversal of mistakes.
File Handling: Stores dispatch records in .json, generates daily logs in .csv, and creates invoices in .pdf.
RESTful API: Provides endpoints to add, process, and track emergency requests.

# Project Structure
flood-relief-system/
├── src/
│   ├── app.js                 # Main application file
│   ├── priorityQueue.js       # Priority Queue logic for managing requests
│   ├── stack.js               # Stack for tracking dispatched services
│   ├── fileHandler.js         # File handling for records and invoices
├── dispatchRecords.json       # Dispatch records stored in .json format
├── dailyLogs.csv              # Daily incident log file (created dynamically)
├── package.json               # Project dependencies and metadata
├── package-lock.json          # Dependency tree lock file
└── README.md                  # Project documentation

# Setup and Installation
Follow these steps to set up the project:

Clone the repository: git clone https://github.com/ananya-kushi07/Flood-Relief-and-Emergency-Services-Dispatch-System.git
cd flood-relief-system
Install dependencies: Ensure you have Node.js installed. Run the following to install required packages:

npm install
Start the application: To start the server, run:

npm start
The server will be accessible locally.

# API Endpoints
POST /addRequest: Adds a new emergency request to the queue.
GET /viewQueue: Displays all emergency requests in the queue, sorted by priority.
POST /processRequest: Processes the highest priority emergency request.
GET /transactionHistory: Displays the stack of dispatched services.
POST /generateInvoice: Generates a .pdf invoice for dispatched services.
POST /generateDailyLogs: Creates a .csv file for daily incident logs.
POST /undoLastDispatch: Reverts the last dispatched service if needed.

# Technologies Used
Node.js – Backend runtime environment.
Express.js – Framework for building RESTful APIs.
MongoDB – Database to store request data and dispatch records.
PDFKit – To generate PDF invoices for services rendered.
csv-writer – To generate daily logs in .csv format.
fs module – For file operations, such as reading and writing logs.

# File Handling
Dispatch Records: Stored in .json format, allowing easy access and retrieval.
Daily Logs: Generated and stored in .csv format to track incidents throughout the day.
Invoices: After each dispatch, a downloadable .pdf invoice is generated for user reference.

# Contributing
Fork the repository to make your changes.
Create a new branch for your feature or fix.
Commit your changes with detailed messages.
Push to your fork and submit a pull request.

# License
This project is licensed under the MIT License – see the LICENSE file for more details.

# Acknowledgments
Thanks to the open-source community for providing libraries like Express, MongoDB, and PDFKit which made this project possible.
