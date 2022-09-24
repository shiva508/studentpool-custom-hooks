import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

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
  const match = useRouteMatch();
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetctQuotes = async () => {
      const response = await axios.get(
        "https://aaaa-f3e2b-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
      );
      return await response.data;
    };
    fetctQuotes().then((res) => {
      for (const data in res) {
        DUMMY.push({
          id: data,
          auther: res[data].author,
          text: res[data].text,
        });
      }
      setQuotes(DUMMY);
      const quotefound = DUMMY.find((qu) => qu.id === params.quoteId);
      if (!quotefound) {
        setLoading(false);

        return <p>Not found</p>;
      } else {
        setQuote(quotefound);
        setLoading(false);
      }
    });
  }, [params.quoteId]);

  return (
    <Fragment>
      {loading && <LoadingSpinner></LoadingSpinner>}
      {quote ? (
        <HighlightedQuote
          text={quote.text}
          author={quote.auther}
        ></HighlightedQuote>
      ) : (
        <p>No Data Found</p>
      )}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
