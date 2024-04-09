import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import JamLogo from "../images/jam-pen.png";
import Graypaper from "../images/graypaper.png";
import Background from "../images/background.png";
import Wordmark from "../images/wordmark.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="pr-[25px] md:pr-[80px]">
        <img src={JamLogo} alt="JAM Logo" />
      </div>
      <h2>JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM</h2>

      <main>
        <article>
          <h2 id="Download">Download</h2>
          <p>
            Get your copy of the <a href={Graypaper}>JAM Graypaper here.</a>
          </p>
          <h2 id="News">News</h2>
          <table className="borders-custom">
            <tr>
              <td>18/04/2024</td>
              <a href="https://github.com/paritytech/polkajam" target="_blank">
                <td>Graypaper JAM specification published</td>
              </a>
            </tr>
          </table>

          <h2 id="Implement">Implement</h2>
          <p>
            Get involved with the development of JAM VM in our{" "}
            <a href="#matrix">Matrix Channel</a>.
          </p>

          <div className="flex flex-col items-end py-10">
            <img className="h-10" src={Wordmark} alt="Polkadot Wordmark" />
          </div>
        </article>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>JAM</title>
    <meta name="description" content="JAM Graypaper" />
    <link rel="stylesheet" href="https://latex.now.sh/style.css"></link>
    <body
      className="latex-dark bg-cover bg-black"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    />
  </>
);
