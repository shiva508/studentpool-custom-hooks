import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import axios from "axios";

const NewQuote = () => {
  const history = useHistory();
  const onAddNewQuote = (quotedata) => {
    console.log(quotedata);
    axios
      .post(
        "https://aaaa-f3e2b-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
        quotedata
      )
      .then((res) => {
        console.log(res);
        history.push("/quotes");
      });
  };
  return <QuoteForm onAddQuote={onAddNewQuote}></QuoteForm>;
};
export default NewQuote;
