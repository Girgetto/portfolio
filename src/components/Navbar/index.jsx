import React from 'react';

const Navbar = () => (
	<ul>
		<li>
			{/* TODO: Refactor */}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/Girgetto"
			>
        GitHub
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://twitter.com/__Giorgio_"
			>
        Twitter
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://girgetto-io.netlify.com/"
			>
        Girgetto.io
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dev.to/girgetto"
      >
        dev.to
      </a>
    </li>
  </ul>
);

export default Navbar;
