import Head from "next/head";

import parse from "html-react-parser";

export default function Home() {
  parse(""); // 337: NOTE: IT IS USED HERE!

  return (
    <div>
      <Head>
        <title>Reproduce 337</title>
      </Head>

      <main style={{ backgroundColor: "black" }}>I should be seen!</main>
    </div>
  );
}

