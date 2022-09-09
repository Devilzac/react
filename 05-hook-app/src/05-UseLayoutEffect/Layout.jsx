import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote,Quote } from '../03-examples';

export const Layout = () => {
    
    const {counter, increment, decrement, reset} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author,quote} = !!data && data[0];
    const decrementControl = ()=>{
        if(counter>=2){
            decrement(1);
        }
        else{
            reset()
        }
    }
    return (
        <>
            <h1>Breaking bad Quotes</h1>
            <hr />
            {
                isLoading 
                ?<LoadingQuote />
                :<Quote quote={quote} author={author} />
            }
            
            <button className='btn btn-primary m-1' disabled={isLoading} onClick={decrementControl}>
                Previous Quote
            </button>
            <button className='btn btn-primary m-1' disabled={isLoading} onClick={()=>increment(1)}>
                Next Quote
            </button>
        </>
  )
}
