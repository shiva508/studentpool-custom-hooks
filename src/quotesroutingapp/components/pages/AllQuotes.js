import { Fragment } from "react";
import QuoteList from "../quotes/QuoteList";
const DUMMY = [
  {
    id: "q1",
    auther: "Shiva",
    text: "Learning new thing is interesting",
  },
  {
    id: "q2",
    auther: "Shiva Dasari",
    text: "Learning new thing is interesting",
  },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY}></QuoteList>
    </Fragment>
  );
};

export default AllQuotes;
