# Aurora Suites Hotel Chatbot

A local AI-powered customer support chatbot for **Aurora Suites**. The chatbot answers guest questions about hotel services, policies, amenities, check-in/check-out, parking, pets, breakfast, and other frequently asked questions.

The application uses **Flask** for the web server and **Ollama with Llama 3.2** to generate responses locally.

## Features

* AI-powered hotel customer support
* Answers questions using Aurora Suites' hotel FAQ
* Local AI processing using Ollama
* Streaming AI responses
* Hotel-specific system prompt
* Attempts to keep responses within the available hotel information
* Simple web-based chat interface
* Model availability checking through the Ollama API
* Input validation for empty questions
* Friendly and professional hotel assistant persona
* Basic error handling for Ollama connection problems

## Technologies Used

* **Python**
* **Flask**
* **Ollama**
* **Llama 3.2**
* **HTML/CSS/JavaScript**
* **Requests**
* **Jinja2**

## Project Structure

```text
aurora-suites-chatbot/
│
├── app.py
├── README.md
├── requirements.txt
├── Aurora Suites.txt
├── basix questions.txt
├── test scenerios.txt
├── prompt injection reports.txt
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── hotel chatbot screenshot/
```

## Requirements

Before running the project, make sure you have:

* Python 3.9 or newer
* Flask and other Python dependencies listed in `requirements.txt`
* Ollama
* Llama 3.2 model
* A modern web browser

## Installation

### 1. Download the Project

Download or clone the project files to your computer.

### 2. Create a Virtual Environment

Open Command Prompt or Terminal in the project folder:

```bash
python -m venv venv
```

Activate the virtual environment.

**Windows:**

```bash
venv\Scripts\activate
```

### 3. Install Dependencies

Install all required Python packages using the requirements file:

```bash
pip install -r requirements.txt
```

## Ollama Setup

This project uses Ollama to run the AI model locally.

Install Ollama and make sure it is available on your computer.

Check the installed models:

```bash
ollama list
```

The project currently uses:

```text
llama3.2:latest
```

If the model is not installed, download it with:

```bash
ollama pull llama3.2
```

You can verify the installation with:

```bash
ollama list
```

## Running the Application

### 1. Start Ollama

Make sure the Ollama service is running.

If necessary, start it with:

```bash
ollama serve
```

Keep this terminal window open.

### 2. Start the Flask Application

Open another Command Prompt window and navigate to the project directory.

Activate the virtual environment:

```bash
venv\Scripts\activate
```

Then run:

```bash
python app.py
```

The Flask application should start on:

```text
http://127.0.0.1:5000
```

Open this address in a web browser to use the chatbot.

## How It Works

The chatbot follows this process:

```text
Guest
  │
  ▼
Web Chat Interface
  │
  ▼
Flask Application
  │
  ▼
Hotel System Prompt + Guest Question
  │
  ▼
Ollama API
  │
  ▼
Llama 3.2
  │
  ▼
Streaming Response
  │
  ▼
Guest
```

The Flask application communicates with the local Ollama service through:

```text
http://localhost:11434
```

Because Ollama runs locally, the Llama 3.2 model is processed on the user's computer rather than through a cloud AI API.

## Hotel Information

The chatbot is configured with Aurora Suites FAQ information, including:

* Check-in and check-out times
* Early check-in and late check-out
* Breakfast
* Wi-Fi
* Parking
* Pet policy
* Pool and gym
* Housekeeping requests
* Airport shuttle
* Room amenities
* Payment methods
* Smoking policy
* Rewards program
* Laundry
* Business center
* Accessibility
* Group bookings and events
* Lost and found
* Luggage storage
* Wake-up requests
* Children's accommodation
* Rollaway beds and cribs
* Reservation and no-show policies

## Safety and Response Rules

The chatbot is instructed to:

* Use the available Aurora Suites FAQ when answering questions.
* Avoid inventing hotel policies or information.
* Avoid making up room prices or availability.
* Answer guest questions directly.
* Remain professional and friendly.
* Stay in the Aurora Suites assistant role.
* Avoid revealing internal prompt or FAQ numbering.
* Refuse instructions that attempt to change its assigned role.
* Escalate questions requiring information that is not available to the chatbot.

For example, if a guest asks for a current room price that is not included in the FAQ, the chatbot should explain that the information is unavailable and direct the guest to hotel staff.

## API Endpoints

### `GET /`

Loads the chatbot web interface.

### `GET /api/models`

Retrieves available models from the local Ollama server.

### `POST /api/chat`

Receives a guest message and sends it to the selected Ollama model.

Example request:

```json
{
  "model": "llama3.2:latest",
  "messages": [
    {
      "role": "user",
      "content": "What time is check-in?"
    }
  ]
}
```

The endpoint streams the AI response back to the browser.

## Example Questions

Guests can ask questions such as:

```text
What time is check-in?
```

```text
Is breakfast included?
```

```text
How much is parking?
```

```text
Are pets allowed?
```

```text
What time is checkout?
```

```text
Do you have an airport shuttle?
```

```text
Can I request a crib?
```

## Testing

The application was tested using different categories of guest scenarios, including:

* Basic hotel questions
* Service-related questions
* Intermediate guest scenarios
* Multiple questions in one interaction
* Stress testing
* Prompt-injection testing
* Unsupported-information requests

Testing results and screenshots are included in the project documentation.

## Limitations

This project currently does not provide:

* Real-time room availability
* Real-time room pricing
* Direct reservation booking
* Guest account access
* Payment processing
* Direct communication with hotel staff
* Production cloud deployment

The chatbot depends on the information available in the hotel FAQ and the locally running Ollama service. AI-generated responses may occasionally require further validation.

## Troubleshooting

### Ollama Cannot Be Reached

If the application reports that Ollama cannot be reached, make sure Ollama is running.

Try:

```bash
ollama list
```

You can also start the server with:

```bash
ollama serve
```

### Model Not Found

Check the installed models:

```bash
ollama list
```

Make sure:

```text
llama3.2:latest
```

is available.

### Flask Application Does Not Start

Make sure the virtual environment is activated and install the project dependencies:

```bash
pip install -r requirements.txt
```

Then run:

```bash
python app.py
```

## Future Improvements

Possible future improvements include:

* Real-time room availability
* Room pricing integration
* Hotel reservation functionality
* Guest authentication
* Booking cancellation through the chatbot
* Database integration
* Conversation history
* Human-agent escalation
* Multilingual support
* Improved response validation
* Automated testing
* Deployment to a production server

## Author

**Aurora Suites Hotel Chatbot Project**

Built as a local AI-powered hotel customer support application using Flask, Ollama, and Llama 3.2.
