import Head from "next/head";
import { useAxios } from "use-axios-client";
import Feeds from "../components/Feeds";
import Header from "../components/Header";
import Spinner from "react-svg-spinner";

export default function Home() {
  const { data, error, loading } = useAxios({
    url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}&count=5`,
  });

  return (
    <>
      <Head>
        <title>Spacestagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && <Spinner className="text-7xl" />}

      {data && (
        <>
          <Header />
          <main>
            {data.map((d) => (
              <div key={d.date} className="ml-5">
                <Feeds url={d.url} explanation={d.explanation} />
              </div>
            ))}
          </main>
        </>
      )}
    </>
  );
}
