import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

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
const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY.find((qu) => qu.id === params.quoteId);

  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.auther}
      ></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
