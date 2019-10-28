import React from "react";
import { Link } from "@reach/router";

export default function Home() {
  return (
    <main>
      <h1>homepage</h1>
      <h2>subheding</h2>
      <img
        src="https://www.scrapbook.com/products/source/SBC_ac-310296_7343.jpg"
        alt="old typewriter"
      />
      <Link to="articles">
        <button>Latest Articles</button>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
        dolores ut molestiae, animi eos quod? Veniam dolores unde officia
        quisquam at sint deserunt, beatae consequuntur, eveniet laboriosam
        voluptatibus iste.
      </p>
    </main>
  );
}
