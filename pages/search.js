import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
// import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  //   console.log(format(new Date(2014, 1, 11), "dd-MMMM-yy"));
  //   console.log(startDate);
  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  // const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* main */}
      <main className="flex">
        <section className=" flex-grow pt-14 px-6">
          <p className="text-xs">Over 1,000 stays for {noOfGuests} guests</p>
          <h1 className="font-semibold mt-2 text-3xl">Rooms in {location}</h1>
          <div className=" hidden md:inline-flex mt-2 mb-6 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Prices</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          {searchResults.map(
            ({ title, img, description, star, price, total, long, lat }) => (
              <div className="flex flex-grow">
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  desctiption={description}
                  star={star}
                  price={price}
                  total={total}
                />
              </div>
            )
          )}
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then((res) => res.json())
    .catch((err) => console.log(err.message));

  return {
    props: {
      searchResults,
    },
  };
}
