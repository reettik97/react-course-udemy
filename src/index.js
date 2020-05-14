import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Comment from "./commentComponent";
import ApprovelCard from "./approvalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovelCard >
      <Comment date={faker.date.past().toDateString()} name={faker.name.firstName()} comment={faker.lorem.lines()} />
      </ApprovelCard>
      <ApprovelCard>
      <Comment date={faker.date.past().toDateString()} name={faker.name.firstName()} comment={faker.lorem.lines()} />
      </ApprovelCard>
      <ApprovelCard>
      <Comment date={faker.date.past().toDateString()} name={faker.name.firstName()} comment={faker.lorem.lines()}/>
      </ApprovelCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
