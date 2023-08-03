
import './App.css';
import Quote from './component/Quote';

import React,{ useEffect,useState} from 'react';

function App() {
  const [quote, setQuote] = useState({
    anime:null,
    character:null,
    quote:null
  })

  const fetchquote = async() =>{

    fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then(quote => setQuote(quote))
    
    
  }
useEffect(()=>{


  fetchquote()
  
  
},[])


  
  return (
    <div className='app'>
      <h1><span className='first'>Anime</span> <span className='second'>Quote</span> generator</h1>
      <Quote anime={quote.anime} quote={quote.quote} character={quote.character}  fetchquote={fetchquote}/>
      
    </div>
  );
}

export default App;
