import { useState, useEffect } from "react";
export const useFetch = ( url ) =>{

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

   const getFetch = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
   }
   
    useEffect(() => {
        getFetch()
    }, [url])
    


    return {
        // state <-- Puedo retornar directamente el state, pero de la manera actual se prioriza la lectura
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}