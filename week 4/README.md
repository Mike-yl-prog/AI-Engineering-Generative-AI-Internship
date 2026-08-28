
HealthConnect Healthcare Information Assistant
AnalystLab Africa — Week 4 Generative AI Experience Lab

Program: AnalystLab Africa — Generative AI Experience Lab
Track: Generative AI
Project: HealthConnect Clinic
Week: 4
Author: Ademigoke Michael
Status: Design & Planning Stage

Project Overview

Week 4 marks the beginning of the HealthConnect Experience Lab at AnalystLab Africa.

The project focuses on designing a Generative AI Healthcare Information Assistant that can provide patients with accurate administrative and informational support while maintaining clear safety boundaries.

The assistant is designed to reduce repetitive patient enquiries and improve the patient support experience while ensuring that clinical decisions remain with qualified healthcare professionals.

Assistant Purpose

The HealthConnect Healthcare Information Assistant is designed to provide fast, consistent, and reliable answers to approved administrative and informational questions.

The assistant will support areas such as:

Clinic information
Opening hours and locations
Appointment procedures
Booking, rescheduling, and cancellation procedures
Missed and late-arrival policies
What patients need for appointments
General billing and payment information
Approved frequently asked questions

The assistant will not provide medical diagnosis, treatment recommendations, medication advice, or emergency medical care.

Proposed Solution

The proposed solution is a knowledge-grounded conversational assistant using Retrieval-Augmented Generation (RAG).

The assistant will retrieve relevant information from the approved HealthConnect Clinic Knowledge Base before generating a response.

The design prioritizes:

Accuracy
Grounded responses
Safety
Scope adherence
Human escalation
Prevention of unsupported information
Safety Boundaries

The assistant will not:

Diagnose medical conditions
Interpret symptoms
Recommend or prescribe medication
Provide treatment advice
Provide emergency medical advice or triage
Invent clinic policies, prices, or appointment availability
Present itself as a doctor, nurse, or clinical authority

Requests outside the approved scope will be declined or appropriately escalated.

Initial Assistant Workflow
User Input
    ↓
Safety & Intent Check
    ↓
Scope Check
    ↓
Knowledge Base Retrieval
    ↓
Grounded Response Generation
    ↓
Response Validation
    ↓
Response or Escalation

Key Areas Covered in Week 4
Problem understanding
Assistant purpose and target users
Supported use cases
Out-of-scope requests
Safety boundaries
Escalation approach
Retrieval-Augmented Generation
Initial assistant workflow
Risks and limitations
Initial technical approach
Planned Technical Approach

The proposed technical implementation will explore:

Python
Jupyter Notebook for early experimentation
VS Code for prototype development
Git and GitHub for version control
Retrieval-Augmented Generation
LLM-based response generation
Prompt engineering
Safety and scope evaluation

The technical implementation will begin in later stages of the project. Week 4 focuses on problem definition, planning, and solution design.

Key Risks and Considerations

Important considerations include:

AI hallucination
Inaccurate or outdated knowledge-base information
Medical and emergency requests
Ambiguous user questions
Prompt injection
Privacy and sensitive information
Missing information in the approved Knowledge Base

The proposed approach is to use grounding, scope controls, validation, and human escalation to reduce these risks.

Week 4 Deliverables
AI Assistant Design Document
Week 4 Project Summary
Initial Assistant Workflow
Proposed Technical Approach
Week 5 Focus

The next stage will move from design toward initial technical experimentation.

Planned activities include:

Preparing the HealthConnect Knowledge Base for retrieval
Exploring an initial retrieval approach
Developing system prompts and safety instructions
Creating an initial evaluation test set
Testing supported and unsupported requests
Testing safety and adversarial scenarios
Evaluating response quality and scope adherence
Author

Ademigoke Michael
Generative AI / AI Engineering Intern
AnalystLab Africa Experience Lab
