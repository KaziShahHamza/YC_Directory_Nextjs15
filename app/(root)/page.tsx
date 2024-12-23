import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl ">
          YC Directory is a platform to connect with other entrepreneurs and
          pitch their startups to the community.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
