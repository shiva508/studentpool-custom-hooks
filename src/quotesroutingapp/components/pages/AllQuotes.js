import { Fragment, useEffect, useState } from "react";
import QuoteList from "../quotes/QuoteList";
import AxiosClient from "../../repository/AxiosClient";
import axios from "axios";
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
    text: "Learning new thing is ",
  },
];

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
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
      setLoading(false);
    });
  }, []);

  return (
    <Fragment>
      {loading && <LoadingSpinner></LoadingSpinner>}
      <QuoteList quotes={quotes}></QuoteList>
    </Fragment>
  );
};

export default AllQuotes;
