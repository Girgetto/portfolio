import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby";

export default function index() {
  return (
    <CookieConsent>
      This website uses cookies to enhance the user experience.{" "}
      <Link style={{ color: "white" }} to="/privacy-policy">
        Learn more
      </Link>
    </CookieConsent>
  );
}
