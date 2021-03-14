import React from "react";

import config from "../../config/config.json";

const links = [
  { href: config.github, title: "GitHub" },
  { href: config.twitter, title: "Twitter" },
  { href: config.girgetto_io, title: "Girgetto.io" },
  { href: config.dev_to, title: "dev.to" },
];

const Navbar = () => (
  <ul>
    {links.map(({ href, title }) => (
      <li key={title}>
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default Navbar;
