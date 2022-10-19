import React from "react";

import {
  CardWrapper,
  CardContainer,
  JobCard,
  JobCardInfo,
  JobCardContent,
  JobCardContentMid,
  JobCardContentTop,
  JobTags,
  JobCardFooter,
  AdTags,
} from "./JobCards";

import { ButtonLink } from "../components/Buttons/ButtonElements";

function Jobs({
  jobTitle,
  company,
  rating,
  jobLocation,
  jobTags,
  adTags,
  jobDescription,
  timeSincePosted,
}) {
  const jobTagsElements = jobTags.map((tag) => <JobTags>{tag}</JobTags>);
  const adTagsElements = adTags.map((tag) => <AdTags>{tag}</AdTags>);
  const jobDescriptionElements = jobDescription.map((description) => (
    <li>{description}</li>
  ));

  return (
    <CardWrapper>
      <CardContainer>
        <JobCard>
          <JobCardContent>
            <JobCardContentTop>
              <JobCardInfo>
                <h2 style={{ color: "#ff8100", marginBottom: "10px" }}>
                  {jobTitle}
                </h2>
                <h5>
                  <p>
                    {company}
                    <span style={{ fontWeight: "bold" }}>
                      {" " + rating + " "}&#9733;
                    </span>
                  </p>
                  <p>{jobLocation}</p>
                </h5>
              </JobCardInfo>
            </JobCardContentTop>
            <div>{jobTagsElements}</div>
            <div>{adTagsElements}</div>
            <JobCardContentMid>
              <ul>{jobDescriptionElements}</ul>
            </JobCardContentMid>
          </JobCardContent>
          <JobCardFooter>
            <p>{"Posted: " + timeSincePosted}</p>
            <ButtonLink style={{ borderColor: "white", color: "white" }}>
              {"Apply"}
            </ButtonLink>
          </JobCardFooter>
        </JobCard>
      </CardContainer>
    </CardWrapper>
  );
}

export default Jobs;
