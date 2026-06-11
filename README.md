# Student Enrollment Portal App

## Overview

The Student Enrollment Portal App is a React application built with Vite that allows users to view a student roster fetched from an external API and enroll new students through a form.

The project demonstrates core React concepts, modern JavaScript (ES6+), API integration, component-based architecture, state management, controlled and uncontrolled forms, conditional rendering, and component communication.

---

## Live Features

- Fetches student data from an external API
- Displays students in a responsive card layout
- Shows student details including:

  - Avatar
  - Full Name
  - Email Address
  - Track
  - Score
  - Grade
  - Active/Inactive Status

- Calculates and displays class average score
- Allows enrollment of new students
- Form validation with error handling
- Loading and error states for API requests
- Refresh roster functionality
- Demonstrates both Functional and Class Components

---

# Project Structure

```text
src/
│
├── App.jsx
├── App.css
│
├── components/
│   ├── Header.jsx
│   ├── Button.jsx
│   ├── ClassButton.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   ├── EnrollForm.jsx
│   └── StatusMessage.jsx
```

---

# Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Random User API

---

# API Used

The application uses the Random User API:

https://randomuser.me/api/?results=6&nat=us,gb

The API provides:

- Student names
- Email addresses
- Profile pictures
- Unique IDs

The fetched data is transformed into the application's student object structure before being stored in state.

---

# Component-Based Architecture

React applications are built using reusable components.

Instead of placing all code in a single file, the UI is broken into smaller independent pieces.

Examples in this project:

### Header Component

Displays:

- Application title
- Total students
- Average class score

### StudentCard Component

Displays information for a single student.

### StudentList Component

Renders multiple StudentCard components.

### EnrollForm Component

Handles new student enrollment.

### StatusMessage Component

Displays loading and error messages.

### Button Components

Demonstrates both Functional and Class Component patterns.

Benefits of Component-Based Architecture:

- Reusable code
- Easier maintenance
- Better scalability
- Separation of concerns

---

# Virtual DOM

React uses a Virtual DOM to improve performance.

Instead of updating the entire webpage whenever data changes:

1. React creates a lightweight copy of the DOM (Virtual DOM).
2. React compares the new Virtual DOM with the previous version.
3. Only the changed elements are updated in the real DOM.

Benefits:

- Faster rendering
- Better performance
- Efficient UI updates

---

# React Concepts Demonstrated

## Functional Components

Most components were built using functional components:

- Header
- Button
- StudentCard
- StudentList
- EnrollForm
- StatusMessage

Example:

```jsx
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};
```

---

## Class Components

The ClassButton component was created using the class syntax to demonstrate understanding of older React component patterns.

Example:

```jsx
class ClassButton extends React.Component {
  render() {
    return <button>{this.props.title}</button>;
  }
}
```

Difference:

- Functional Components use props directly.
- Class Components access props through this.props.

---

## Props and Destructuring

Data is passed between components using props.

Example:

```jsx
<Header title="Enrollment Portal" studentCount={students.length} />
```

Destructuring is used to access props:

```jsx
const Header = ({ title, studentCount }) => {};
```

---

## Component Composition

Components are combined together to build larger interfaces.

Example:

```jsx
<StudentList>
  <p>End of roster</p>
</StudentList>
```

StudentList renders StudentCard components internally.

---

## Conditional Rendering

Conditional rendering is used to display:

- Loading messages
- Error messages
- Active/Inactive status

Example:

```jsx
{
  isActive ? "Active" : "Inactive";
}
```

---

# State Management

## useState

The application uses useState to manage:

- Student list
- Loading state
- Error state
- Form values
- Validation errors

Example:

```jsx
const [students, setStudents] = useState([]);
```

---

## useEffect

useEffect is used to fetch student data when the application loads.

Example:

```jsx
useEffect(() => {
  fetchStudents();
}, []);
```

The empty dependency array ensures the API call runs only once.

---

# Data Fetching

The application fetches data using the Fetch API.

Process:

1. Application loads.
2. API request is sent.
3. Response is converted to JSON.
4. Data is transformed into student objects.
5. Data is stored in state.
6. Student cards are rendered.

Example:

```jsx
const response = await fetch(url);
const data = await response.json();
```

---

# Loading and Error Handling

Two additional states were implemented:

```jsx
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

Loading State:

```jsx
<StatusMessage type="loading" />
```

Error State:

```jsx
<StatusMessage type="error" />
```

This prevents the application from crashing if the API request fails.

---

# Controlled vs Uncontrolled Forms

The main objective of this project was to demonstrate both controlled and uncontrolled form inputs.

## Controlled Inputs

Controlled inputs store their values in React state.

Used for:

- First Name
- Last Name
- Track
- Score

Example:

```jsx
const [firstName, setFirstName] = useState("");

<input value={firstName} onChange={(e) => setFirstName(e.target.value)} />;
```

Advantages:

- React always knows the current value.
- Easier validation.
- Easier conditional rendering.
- Supports live previews.

---

## Uncontrolled Inputs

Uncontrolled inputs store their values in the DOM.

Used for:

- Email
- Active Checkbox

Example:

```jsx
const emailRef = useRef();

<input ref={emailRef} defaultValue="" />;
```

Values are retrieved only when needed:

```jsx
const email = emailRef.current.value;
```

Advantages:

- Less state management.
- Useful for simple forms.
- Useful when React does not need to track every keystroke.

---

# Form Validation

Validation rules:

- First Name is required.
- Last Name is required.
- Email must contain "@"
- Score must be between 0 and 100.

Errors are displayed inline beneath the corresponding fields.

Invalid submissions are blocked.

---

# Array Methods Used

## map()

Used to render student cards.

```jsx
students.map((student) => <StudentCard key={student.id} />);
```

---

## reduce()

Used to calculate average score.

```jsx
const total = students.reduce((sum, student) => sum + student.score, 0);
```

---

# Grade Calculation

Grades are generated dynamically based on score.

| Score Range | Grade |
| ----------- | ----- |
| 90 - 100    | A     |
| 80 - 89     | B     |
| 70 - 79     | C     |
| 60 - 69     | D     |
| Below 60    | F     |

---

# Application Flow

1. App loads.
2. API request fetches students.
3. Seed students are merged with fetched students.
4. Header displays student count and average score.
5. Student roster is rendered.
6. User completes enrollment form.
7. Validation runs.
8. New student is added to state.
9. UI updates automatically.

---

# Learning Outcomes

This project demonstrates understanding of:

- React Components
- Functional Components
- Class Components
- JSX
- Props
- Destructuring
- Conditional Rendering
- Component Composition
- useState
- useEffect
- useRef
- Controlled Forms
- Uncontrolled Forms
- API Fetching
- Error Handling
- Array Methods
- State Management
- React Event Handling

---

# Live Demo Link

https://student-enrollment-portal.vercel.app/
