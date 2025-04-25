import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "../Assets/Styles/Landing.css";

import blobs from "../Assets/Images/blobs.svg";
import chibi_me from "../Assets/Images/chibi_me.svg";
import code from "../Assets/Images/code.svg";
import art from "../Assets/Images/art.svg";

const LandingPage = () => {
  const navigate = useNavigate();
  
  const [showError, setShowError] = useState(true);
  const [iconsStage, setIconsStage] = useState("visible"); // "visible", "hiding", "hidden"
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // 1. Let ERROR pulse for 3s
    const pulseTimer = setTimeout(() => {
      setIconsStage("hiding"); // Start hiding icons
    }, 3000);

    // 2. Hide icons one-by-one (over ~2s total)
    const hideIconsTimer = setTimeout(() => {
      setIconsStage("hidden"); // All icons hidden
      setShowError(false);     // Also hide ERROR
    }, 5000);

    // 3. 1 second pause with nothing visible
    const finalStep = setTimeout(() => {
      setShowWelcome(true);    // Show Welcome + icons again
      setIconsStage("visible");
    }, 7000);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(hideIconsTimer);
      clearTimeout(finalStep);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* CORNER ICONS */}
      {iconsStage !== "hidden" && (
        <>
          <motion.img 
            src={blobs}
            className="blobs-top-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: iconsStage === "visible" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img 
            src={art}
            className="art-top-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: iconsStage === "visible" ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.img 
            src={code}
            className="code-bottom-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: iconsStage === "visible" ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </>
      )}

      {/* CENTER TEXT */}
      <AnimatePresence>
        {showError && (
          <motion.h1
            key="error"
            className="error-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1, 1] }}
            transition={{ duration: 3 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            ERROR
          </motion.h1>
        )}
        {!showError && showWelcome && (
          <motion.h1
            key="welcome"
            className="welcome-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="welcome-title">Hi, I'm Anhelina</h3>

            <p className="welcome-description">A frontend developer with a stylus in one hand and React in the other. <br /><br />
            This is my interactive resume: part playground, part experiment, and a glimpse into where I'm headed.<br /><br />
            Most of what you'll see here started in college — but every line of code and pixel is mine.</p>

          </motion.h1>
        )}
      </AnimatePresence>

      {/* BOTTOM LEFT IMAGE + BUTTON */}
      {showWelcome && (
        <motion.div
          className="landing-bottom-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src={chibi_me} alt="Chibi" className="chibi-image" />
          <button
            className="enter-button"
            onClick={() => navigate("/home")} // Navigate to the home page
          >
            Let's Begin
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default LandingPage;