import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBolt,
  FaTrophy,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [gemini, setGemini] = useState("");
  const [groq, setGroq] = useState("");

  const [geminiTime, setGeminiTime] = useState("");
  const [groqTime, setGroqTime] = useState("");

  const compareModels = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:4000/api/ai/compare",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await response.json();

      setGemini(data.gemini.response);
      setGroq(data.groq.response);

      setGeminiTime(data.gemini.timeTaken);
      setGroqTime(data.groq.timeTaken);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const geminiWords = gemini
    ? gemini.split(/\s+/).length
    : 0;

  const groqWords = groq
    ? groq.split(/\s+/).length
    : 0;

  const winner =
    parseInt(geminiTime) < parseInt(groqTime)
      ? "Gemini"
      : "Groq";

  return (
    <div className="app">

      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      <div className="container">

        <motion.div
          className="hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>
            AI <span>Arena</span>
          </h1>

          <p>
            Compare Gemini & Groq Responses
            In Real Time
          </p>
        </motion.div>

        <motion.div
          className="input-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <textarea
            placeholder="Ask Anything..."
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
          />

          <button
            onClick={compareModels}
            disabled={loading}
          >
            {loading
              ? "Comparing..."
              : "⚔ Compare Models"}
          </button>
        </motion.div>

        {geminiTime && groqTime && (
          <motion.div
            className="winner-card"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <FaTrophy />
            Winner : {winner}
          </motion.div>
        )}

        <div className="results">

          <motion.div
            className="card"
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
          >
            <div className="card-title">
              <FaRobot />
              Gemini
            </div>

            <div className="stats">
              <div>
                <FaClock />
                {geminiTime}
              </div>

              <div>
                <FaFileAlt />
                {geminiWords} words
              </div>
            </div>

            <div className="response">
              {gemini}
            </div>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
          >
            <div className="card-title">
              <FaBolt />
              Groq
            </div>

            <div className="stats">
              <div>
                <FaClock />
                {groqTime}
              </div>

              <div>
                <FaFileAlt />
                {groqWords} words
              </div>
            </div>

            <div className="response">
              {groq}
            </div>
          </motion.div>

        </div>
      </div>


 <motion.footer
  className="footer"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  <div className="footer-content">

    <motion.h3
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      AI Arena
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Built with ❤️ using React, Gemini,
      Groq, GSAP & Framer Motion
    </motion.p>

    <motion.span
      className="footer-name"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      🚀 Designed & Developed by Priyanshu Pant
    </motion.span>

  </div>
</motion.footer>

    </div>
  );
}

export default App;