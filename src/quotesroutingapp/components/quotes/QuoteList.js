import { Fragment } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quotesB) => {
    if (ascending) {
      return quoteA.id > quotesB.id ? 1 : -1;
    } else {
      return quoteA.id < quotesB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  console.log(match);

  const queryParams = new URLSearchParams(location.search);

  const isSorting = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.quotes, isSorting);

  console.log(sortedQuotes);
  const changeSortHandler = () => {
    history.push(`${location.pathname}?sort=${isSorting ? "desc" : "asc"}`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>
          Sort {isSorting ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
