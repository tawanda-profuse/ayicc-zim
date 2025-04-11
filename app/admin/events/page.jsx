import dynamic from "next/dynamic";

const AdminEvents = dynamic(() => import("../../(components)/Admin/AdminEvents"));

const fetchEvents = async (page, location) => {
  const res = await fetch(
    `${process.env.HREF}/api/AllEvents?location=${location}&page=${page}&limit=10`,
    { cache: "no-store" }
  );
  const { data, totalPages } = await res.json();
  return { events: data, totalPages };
};

const AdminEventsPage = async () => {
  const { events, totalPages } = await fetchEvents(1, ""); // Initial load

  return (
    <AdminEvents
      initialEvents={events}
      initialTotalPages={totalPages}
    />
  );
};

export default AdminEventsPage;
