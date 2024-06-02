// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PersonalTable from "../PersonalTable/PersonalTable";
import PersonalForm from "../PersonalForm/PersonalForm";
import { usePersonalApp } from "../context/usePersonalApp";

const Personal = () => {
  // const [items, setItems] = useState([]);

  const { personal } = usePersonalApp();

  // const handleForm = (message) => {
  //   setItems((prevState) => [...prevState, message]);
  // };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {/* <PersonalForm onMessage={handleForm} /> */}
          </div>
          <div className="col-md-6">
            <PersonalTable items={personal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
