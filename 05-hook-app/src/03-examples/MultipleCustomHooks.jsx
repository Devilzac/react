import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    
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
                isLoading ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) :
                (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
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
