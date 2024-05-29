import react ,{useEffect,useState}from 'react';
import './App.css';
import { use } from 'marked';

function App() {
  const [Quoteinfo,setQuoteinfo] =useState({})
  useEffect(() =>{

  },[]);
  const getQuote = () =>{
    fetch('https://api.Quotable.io/random')
    .then((response) => {
      return response.json();
    })
.then((data) =>{
  setQuoteinfo({
    text:data.content,
    author: data.author
  })
  console.log(data);
});
  };
  return (
    <div className="App">
     <div id='quote-box'>
      <p id ='text'>{Quoteinfo.text}</p>
      <p id ='author'>-{Quoteinfo.author}</p>
      <a  href='https://twitter.com/intent/tweet 'id ='tweet-quote'>twitter</a>
      <button id ='new-quote'onClick={getQuote}>New Quote</button>
     </div>
    </div>
  );
}


export default App;
