import { useQuery, gql } from '@apollo/client';

const GET_JOBS = gql`
  query GetJob {
    jobs {
      id
      user {
        first_name
        last_name
      }
      status
      price
      date
    }
  }
`;

function DisplayJobList() {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.jobs.map(({ id, user, price, status, date }) => (
    <div key={ id }>
      <div className="job-row" key={id}>
        <div className="job-customer">
          <p>{ user.first_name } { user.last_name }</p>
        </div>
        <h3>{ new Date(date).toLocaleDateString('en-gb', { year:"numeric", month:"short", day:"2-digit" }) }</h3>
        { status == "Complete"
          ? <p>{ status } at £{ price }</p>
          : <p>{ status }</p>
        }
      </div>
    </div>
  ));
}

const JobList = ({jobs, title}) => {
  return (       
    <div className="job-list">
      <h3>Some jobs</h3>
      <DisplayJobList />
    </div>
  );
}
 
export default JobList;