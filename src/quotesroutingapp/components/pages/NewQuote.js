import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const onAddNewQuote = (quotedata) => {
    console.log(quotedata);
  };
  return <QuoteForm onAddQuote={onAddNewQuote}></QuoteForm>;
};
export default NewQuote;
