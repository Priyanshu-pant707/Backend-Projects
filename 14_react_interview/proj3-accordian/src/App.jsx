import { useState } from "react";
import "./App.css";
function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    if (activeIndex === i) {
      setActiveIndex(null);
    } else {
      setActiveIndex(i);
    }
  };

  const data = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library developed by Meta for building fast and interactive user interfaces using reusable components.",
    },
    {
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a lightweight copy of the real DOM. React compares changes in the Virtual DOM and updates only the necessary parts of the real DOM.",
    },
    {
      question: "What are React Hooks?",
      answer:
        "Hooks are special functions that allow you to use state and other React features in functional components. Examples include useState and useEffect.",
    },
    {
      question: "What is Node.js?",
      answer:
        "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript outside the browser.",
    },
    {
      question: "What is Express.js?",
      answer:
        "Express.js is a minimal and flexible web framework for Node.js used to build APIs and server-side applications.",
    },
    {
      question: "What is MongoDB?",
      answer:
        "MongoDB is a NoSQL database that stores data in flexible JSON-like documents instead of tables and rows.",
    },
    {
      question: "What is Authentication?",
      answer:
        "Authentication is the process of verifying a user's identity before granting access to an application or resource.",
    },
    {
      question: "What is JWT?",
      answer:
        "JWT (JSON Web Token) is a compact and secure way of transmitting information between parties, commonly used for authentication.",
    },
    {
      question: "What is Debouncing?",
      answer:
        "Debouncing delays the execution of a function until a certain amount of time has passed since the last event trigger.",
    },
    {
      question: "What is Rate Limiting?",
      answer:
        "Rate limiting restricts the number of requests a user can make within a specific time period to prevent abuse and server overload.",
    },
  ];

  return (
    <div className="wrapper">
      <h1>React Interview Questions</h1>

      <div className="container">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div
              className="heading"
              onClick={() => toggle(index)}
            >
              <h2>{item.question}</h2>
              <span>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;