import React from "react";
import styled from "styled-components";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const TripFilter = ({ tripFilter, handleChange }) => {
  const {
    org,
    acc_type,
    capacity,
    // price,
    // minPrice,
    // maxPrice,
    // breakfast,
    // pets,
  } = tripFilter;

  const getCheckBoxes = (group, groupName) => {
    return group.map((item, index) => {
      return (
        <div className="filter-checkbox-item">
          <FormControlLabel
            control={
              <Checkbox
                id={`${item.name}-checkbox-${index}`}
                name={`${groupName}*${item.name}`}
                value={item.name}
                checked={item.isChecked}
                onChange={handleChange}
                color="primary"
              />
            }
            label={item.name}
          />
        </div>
      );
    });
  };

  let people = [];
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <TripFilterSection>
      <div className="filter-container">
        <h1 className="filter-heading">Filter:</h1>
        <div className="filter-col">
          <div className="filter-col-item">
            <p>Organisation:</p>
            {getCheckBoxes(org, "org")}
          </div>
          <div className="filter-col-item">
            <p>Accomodation:</p>
            {getCheckBoxes(acc_type, "acc_type")}
          </div>
          <div className="filter-button">More filters</div>
        </div>
      </div>
    </TripFilterSection>
  );
};

export default TripFilter;

const TripFilterSection = styled.header`
  .filter-container {
    flex: 20vw;
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    max-width: 100%;
  }

  .filter-heading {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .filter-col {
    display: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
    margin-left: 0.75rem;
    white-space: nowrap;
  }
  .filter-col-item {
    padding: 5px;
    border: 1px solid var(--gray);
  }

  .filter-button {
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .filter-button:hover {
    cursor: pointer;
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .filter-button:active {
    --transform-scale-x: 0.95;
    --transform-scale-y: 0.95;
    background-color: #f7fafc;
    transition-property: transform;
    transition-duration: 100ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  .filter-checkbox-list {
    list-style-type: none;
  }

  .filter-checkbox-list {
    list-style-type: none;
  }
  .filter-button label {
    display: block;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 0.5rem;
  }
  .filter-button {
    width: 100%;
    background: transparent;
    font-size: 1rem;
  }
`;
