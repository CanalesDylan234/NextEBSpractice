import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import {client} from "@/sanity/lib/client";
import {STARTUPS_QUERY } from "@/sanity/lib/queries";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string}>}) {
    const query = (await searchParams).query;
    const posts = await client.fetch(STARTUPS_QUERY);

    console.log(JSON.stringify(posts, null, 2));


  return (
    <>
    <section className="pink_container">
      <h1 className="heading ">Equipment Business Software: making software work for you! </h1>

      <p className="sub-heading !max-w-3xl">A powerful and flexible software solution that helps you manage your equipment business.</p>  

      <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Startups"}
      </p>

      <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
    </section>
    </>
  );
}