import { useState } from "react";

const NewJob = () => {

  const [jobData, setJobData] = useState({});

  const bindFormElement = (e) => {
    jobData[e.target.id] = e.target.value;
    console.log(jobData);
    setJobData(jobData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="newJob flex flex-col min-h-screen justify-start items-center">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="formLabel">What item do you want to move?</label>
            <p className="text-sm mb-2">Something</p>
            <input
              id="jobTitle"
              type="text"
              required
              value={ jobData.jobTitle }
              onChange={ bindFormElement }
              className="formElement"
            />
            <label className="formLabel">Any other import details?</label>
            <textarea
              id="jobDetails"
              required
              className="formElement"
              onChange={ bindFormElement }
            ></textarea>
            <button className="buttonPrimary">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewJob;