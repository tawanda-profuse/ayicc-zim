import Home from "./(components)/Home";

const fetchAllEvents = async () => {
  try {
    const res = await fetch(
      `${process.env.HREF}/api/AllEvents?limit=${Infinity}`,
      {
        cache: "no-store",
      }
    );

    const { data } = await res.json();

    return data.map((event) => ({
      ...event,
      formattedDate: new Date(event.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    }));
  } catch (error) {
    console.error(error);
  }
};
// Format dates during data fetching
const fetchSomeEvents = async () => {
  try {
    const res = await fetch(`${process.env.HREF}/api/events`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.events.map((event) => ({
      ...event,
      formattedDate: new Date(event.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    }));
  } catch (error) {
    console.error(error);
  }
};

export default async function Page() {
  const allEvents = await fetchAllEvents();
  const events = await fetchSomeEvents();

  return <Home allEvents={allEvents} events={events} />;
}
