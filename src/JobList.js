import { useQuery, gql } from '@apollo/client';

const GET_JOBS = gql`
  query GetJob {
    jobs {
      id
      status
      user_id
    }
  }
`;

function DisplayJobList() {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.jobs.map(({ id, user_id }) => (
    <div key={id}>
      <h3>{user_id}</h3>
      {/* <img width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      {/* <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br /> */}
    </div>
  ));
}

const JobList = ({jobs, title}) => {
  return (       
    <div className="job-list">
      <h2>{title}</h2>
      {jobs.map((job) => (
        <div className="job-row" key={job.id}>
          <div className="job-customer">
            <p>{job.customer}</p> 
          </div>
          <h3>{ job.date }</h3>
          { job.status == "Confirmed" 
            ? <p>{ job.status } at { job.price }</p>
            : <p>{ job.status }</p>
          }
        </div>
      ))} 
      <DisplayJobList />
    </div>
  );
}
 
export default JobList;