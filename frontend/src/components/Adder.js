import React, { useEffect, useState } from "react";
import Education from "./Education";
import JobHistory from "./JobHistory";
import Skills from "./Skills";
import Socials from "./Socials";

const Adder = (props) => {
  const [jobHistoryList, setJobHistoryList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [networkList, setNetworkList] = useState([]);
  const add = () => {
    if (props.type === "עבר תעסוקתי") {
      setJobHistoryList(
        jobHistoryList.concat(<JobHistory key={jobHistoryList.length} />)
      );
    } else if (props.type === "מיומנות") {
      setSkillsList(skillsList.concat(<Skills key={skillsList.length} />));
    } else if (props.type === "השכלה") {
      setEducationList(
        educationList.concat(<Education key={educationList.length} />)
      );
    } else if (props.type === "רשת חברתית") {
      setNetworkList(networkList.concat(<Socials key={networkList.length} />));
    }
  };
  useEffect(() => {}, [jobHistoryList]);
  return (
    <div className="Adder">
      <h2>{props.type}</h2>
      {jobHistoryList.map((job) => (
        <JobHistory key={job.key} />
      ))}
      {educationList.map((education) => (
        <Education key={education.key} />
      ))}
      {skillsList.map((skill) => (
        <Skills key={skill.key} />
      ))}
      {networkList.map((network) => (
        <Socials key={network.key} />
      ))}
      <button type="button" className="add" onClick={add}>
        <i className="fa fa-plus" aria-hidden="false"></i> הוסף {props.type}
      </button>
    </div>
  );
};

export default Adder;
