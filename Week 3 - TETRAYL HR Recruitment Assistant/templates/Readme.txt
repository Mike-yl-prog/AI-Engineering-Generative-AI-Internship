# Tetrayl — AI HR Recruitment Assistant

Tetrayl is an AI-powered HR Recruitment Assistant designed to support recruiters with common recruitment tasks such as candidate screening, CV summarization, interview-question generation, and recruitment-related questions.

## 🎯 Project Objective

The goal of Tetrayl is to demonstrate how prompt engineering, knowledge design, conversational workflows, and AI evaluation can be combined to build a practical HR assistant.

---

## 🏗️ Architecture

Tetrayl follows a simple pipeline from user input to assistant response:

```text
                    ┌───────────────────┐
                    │       USER        │
                    │ Recruitment Query │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   Tetrayl UI      │
                    │   Chat Interface  │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │  Input Processing │
                    │  & Classification │
                    └─────────┬─────────┘
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
          ┌────────────┐ ┌────────────┐ ┌────────────┐
          │ Candidate  │ │ Interview  │ │ Recruitment│
          │   Tasks    │ │   Tasks    │ │    Q&A     │
          └──────┬─────┘ └──────┬─────┘ └──────┬─────┘
                 │              │              │
                 └──────────────┼──────────────┘
                                ▼
                    ┌───────────────────┐
                    │ Prompt / Knowledge│
                    │     Layer         │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │ Response & Safety │
                    │     Handling      │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │     RESPONSE      │
                    │   → User          │
                    └───────────────────┘


                    Architecture Components

1. User Interface
Provides the chat interface through which recruiters interact with Tetrayl.

2. Input Processing
Processes the user's request and determines the appropriate task or intent.

3. Recruitment Task Layer
Handles different recruitment activities such as candidate analysis, interview-question generation, and recruitment Q&A.

4. Prompt & Knowledge Layer
Uses structured prompts and recruitment knowledge to guide the assistant's responses.

5. Response & Safety Layer
Checks the response against the assistant's defined scope, constraints, and responsible-AI requirements.

6. User Response
Returns the final response to the recruiter.

✨ Key Features
📄 CV and candidate profile summarization
🔎 Candidate information extraction
💬 Recruitment-related question answering
📝 Interview-question generation
👤 Candidate profile analysis
⚠️ Clarification and error handling
🔐 Prompt-injection testing
🤝 Responsible AI considerations
🛠️ Technologies
HTML
CSS
JavaScript
NLP
Intent Classification
Prompt Engineering
🧠 Prompt Engineering

Tetrayl uses structured prompts to define:

Assistant role
Objectives
Scope
Response format
Constraints
Safety requirements

A reusable prompt library is included for different recruitment tasks.

🧪 Testing

Tetrayl is tested using normal, ambiguous, mixed-intent, and adversarial inputs.

Testing focuses on:

Accuracy
Relevance
Completeness
Consistency
Clarity
User experience
Prompt-injection robustness

The testing process follows:

Test → Analyze → Improve → Retest
🛡️ Responsible AI

The project considers:

Candidate privacy
Bias in recruitment
Hallucination risks
Security
Ethical limitations
Human oversight

Tetrayl is designed to assist HR professionals, not replace human hiring decisions.