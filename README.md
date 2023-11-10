# BrainMRI-AI

## BrainMRI AI: Voice-Activated Diagnostic Support for Radiologists

---

BrainMRI AI is a cutting-edge tool designed for the modern radiologist, combining advanced semantic search with voice recognition to enhance the speed and accuracy of brain tumor diagnoses. Developed for Vectara's Hackathon 2023, this project introduces a new era of voice-activated medical imaging analysis.

### Overview

Through integrating Vectara's semantic search with the webkitSpeechRecognition API, BrainMRI AI allows radiologists to articulate their observations verbally. The system promptly matches these inputs against a vast database, encompassing a wealth of cases and scholarly articles, to deliver a streamlined and accelerated diagnostic workflow.

### Features

- **Voice-Activated Search**: Utilizes the webkitSpeechRecognition API for hands-free, speech-to-text functionality, enabling radiologists to maintain focus on imaging.
- **Semantic Search**: Employs Vectara's search capabilities for precise database querying, ensuring relevant data retrieval.
- **Comparative Analysis**: Offers instant access to analogous MRI cases, facilitating immediate and accurate examination.
- **Educational Resource**: Serves as an invaluable study tool for medical students by providing real-life MRI case studies and analyses.
- **Literature Access**: Connects users to an expansive array of medical research, augmenting diagnostic insight.
- **Summarization Tool**: Features a summarization capability that highlights and cites crucial information sources.

### Technology Stack

Our responsive and user-friendly interface is powered by:

- **NextJS**: For robust server-side rendering and static site generation.
- **TailwindCSS**: For a sleek, utility-first design that ensures an intuitive user experience.
- **Shadcn**: For advanced UI components and layout patterns.

Vectara's API enhances our application with file storage solutions and reranking features, ensuring the most relevant information is always prioritized.

### Installation

1. Clone this repository.
2. Ensure you have Node.js installed on your machine.
3. Install the dependencies: `npm install`.
4. Start the development server: `npm run dev`.

### Usage

- Activate the voice recognition feature and begin dictating observations.
- Review the automatically compiled documents and cases that appear in real-time.
- Utilize the summarization feature to quickly grasp key insights from the retrieved literature.
