import Home from "./(components)/Home";

const fetchAllEvents = async () => {
  const res = await fetch(`${process.env.HREF}/api/AllEvents?limit=${Infinity}`);
  const { data } = await res.json();

  return data.map((event) => ({
    ...event,
    formattedDate: new Date(event.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
  }));
};

const fetchSomeEvents = async () => {
  const res = await fetch(`${process.env.HREF}/api/events`);
  const data = await res.json();
  return data.events.map((event) => ({
    ...event,
    formattedDate: new Date(event.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  }));
};

export default async function Page() {
  const allEvents = await fetchAllEvents();
  const events = await fetchSomeEvents();

  return <Home allEvents={allEvents} events={events} />;
}
