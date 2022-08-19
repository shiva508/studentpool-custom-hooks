import React from "react";
import BasicForm from "../components/BasicForm";
import BasicFormHook from "../components/BasicFormHook";
import SimpleInput from "../components/SimpleInput";
import SimpleInputHooks from "../components/SimpleInputHooks";

const FormsContainer = () => {
  return (
    <div className="app">
      {/* <SimpleInputHooks /> */}
      {/* <BasicForm /> */}
      <BasicFormHook />
    </div>
  );
};
export default FormsContainer;
