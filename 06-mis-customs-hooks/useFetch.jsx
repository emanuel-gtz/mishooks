import { useEffect, useState } from "react";

export const useFetch = (url) => {

   const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: null
   });

   const getFetch = async () => {

      setState({
         ...state, 
         isLoading: true
      })

      const resp = await fetch(url);
      const data =  await resp.json();

      setState({
         data, 
         isLoading: false,
         hasError: null
      })
   };

   useEffect(() => {
      getFetch();
   }, [url])

   // Esto es un poco redundante, pero favorece a la lectura
   return {
      data: state.data, 
      isLoading: state.isLoading,
      hasError: state.hasError
   };

};