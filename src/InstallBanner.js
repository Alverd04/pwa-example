// src/InstallBanner.js

import React, { useEffect, useState } from "react";
import "./InstallBanner.css";

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  const handleCloseClick = () => {
    console.log("User dismissed the install banner");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div class="smart-banner">
      <div class="banner-logo">
        <img src="logo192.png" alt="App Logo" />
      </div>
      <div class="banner-info">
        <div class="app-name">Pwa example</div>
        <div class="app-rating">Subtitle</div>
      </div>
      <div class="banner-action">
        <button onClick={handleInstallClick} class="action-btn">
          Open In App
        </button>
      </div>
      <div class="close-banner" onclick={handleCloseClick}>
        &times;
      </div>
    </div>
  );
};

export default InstallBanner;
