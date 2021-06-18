import React from "react";

export default function privacyPolicy() {
  const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  };
  return (
    <div style={pageStyles} className="App">
      <h1>📄 Privacy Policy</h1>
      <h2>Google Analytics</h2>
      <div>
        Google provides statistics to improve the website. They use cookies to
        track how you interact with the website.
        <a href="https://policies.google.com/technologies/partner-sites?hl=en">
          www.google.com/policies/privacy/partners/
        </a>
      </div>
    </div>
  );
}
