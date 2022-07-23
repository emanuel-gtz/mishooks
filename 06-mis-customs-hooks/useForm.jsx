import { useState } from "react";

// Este custom hook sera creado para manejar los formularios
export const useForm = (initialForm = {}) => {
   

   const [formState, setFormState] = useState(initialForm);

   const onInputChange = ({target}) => {
      const {name, value} = target;

      setFormState({
         ...formState,
         [name]: value
      });

   };

   const onResetForm = () => {
      setFormState(initialForm);

   };

   return {
      ...formState, // Va a pasar  todas las propiedes que tenga el formState
      formState,
      onInputChange,
      onResetForm
   }
}