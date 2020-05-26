import Head from 'next/head';
import Content from '../components/Content';
// Styles
import NavBar from '../components/Navbar';

function App() {
  return (
    <>
      <Head>
        <title>Germán Cutraro - Full Stack JavaScript Developer</title>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <NavBar />
      <Content />
    </>
  );
}

export default App;
