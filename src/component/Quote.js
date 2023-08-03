import React from 'react'

const Quote = ({anime,character,quote,fetchquote}) => {
  return (<>
    <div className='quote'>
        <div className='anime' title='naruro'>{anime}</div>
        <blockquote>{quote}</blockquote>
        <div className='character' title='madara'>{character}
        </div>
    </div>
        <button onClick={fetchquote}>New Quote</button>
  </>
  )
}

export default Quote