import Typography from "typography";

const theme = {
  fontFamily: ["Roboto", "sans-serif"],
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
    color: "var(--textNormal)",
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
