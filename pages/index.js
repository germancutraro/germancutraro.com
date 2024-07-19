import Head from "next/head";
import Content from "../components/Content";
// Styles
import NavBar from "../components/Navbar";
import { GlobalStyles } from "../styles/globalStyles";

function App() {
  return (
    <>
      <Head>
        <title>Germán Cutraro - Full Stack Engineer</title>
        <meta
          name="description"
          content="Software developer specialized in JavaScript, working on multiple projects both front-end and back-end (Node.js, Express.js, PostgreSQL, Typescript, AWS, etc).
I focus on creating scalable products, following good practices to achieve better performance. I also work / worked as CTO, Full Stack Developer, Mobile Developer, Software Consultant in multiple projects abroad.

Passionate about the cloud, architectures and everything related to Amazon Web Services!
I love learning, training people and working on innovative projects."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <GlobalStyles />
      <NavBar />
      <Content />
    </>
  );
}

export default App;
