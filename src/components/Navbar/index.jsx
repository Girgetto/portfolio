import React from "react";

import { github, twitter, girgetto_io, dev_to } from "../../config/config.json";

const links = [
  { href: github, title: "GitHub" },
  { href: twitter, title: "Twitter" },
  { href: girgetto_io, title: "Girgetto.io" },
  { href: dev_to, title: "dev.to" },
];

const Navbar = () => (
  <ul>
    {links.map(({ href, title }) => (
      <li>
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default Navbar;
