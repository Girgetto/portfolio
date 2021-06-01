import Typography from "typography";

const theme = {
  bodyFontFamily: ["Roboto", "sans-serif"],
  h1: {
    fontSize: "54px",
    fontWeight: "500",
  },
  p: {
    fontSize: "24px",
  },
  h3: {
    fontSize: "24px",
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  "a.anchor": {
    boxShadow: "none",
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  "a:hover": {
    color: "var(--textLink)",
    textDecoration: "none",
  },
  a: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    color: "var(--textNormal)",
    fontSize: "16px",
  },
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
