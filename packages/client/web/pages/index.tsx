import { useState } from "react";
import Head from "next/head";
import { Header, Button } from "@shared/components";

const Home = () => {
  const [isBolded, setIsBolded] = useState(false);
  const description = "World's greatest Monorepo EVER. PERIOD!";
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Create Next App bootstrapped with Lerna & Yarn workspaces" />
        <Button
          name={isBolded ? "Remove highlighting" : "Highlight description"}
          onClick={() => setIsBolded(!isBolded)}
        />

        <p className="description">{isBolded ? <strong>{description}</strong> : description}</p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
