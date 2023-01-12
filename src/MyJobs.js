import { useState } from "react";
import JobList from "./JobList";

const MyJobs = () => {
  const [jobs, setJobs] = useState([
    { date: '2nd Jan 2024', status: 'Confirmed', customer: 'Jon Smith', id: 1, price: '£12.50' },
    { date: '5nd Jan 2024', status: 'Awaiting Payment', customer: 'Mandy Jones', id: 2 },
    { date: '6nd Jan 2024', status: 'Confirmed', customer: 'Jonah Johnson', price: '£8.90', id: 3 },
  ]);
  return (
    <div className="home">
      <JobList jobs={jobs} title="Upcoming jobs"/>
      <JobList jobs={jobs.filter((job) => job.customer === 'Jonah Johnson')} title="Past jobs"/>
    </div>
  );
}

export default MyJobs;