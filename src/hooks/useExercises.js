import { useState, useEffect} from 'react';
import {exercises as seedExercises} from './../seedData';


const useExcersices = () => {

    const addExercise = (exercise) => {

    }
    const updateExercise = (id, updatedFields) => {

    }
    const deleteExercise = (id) => {

    }


    const [exercises, setExercises] = useState(() => {
        const stored = localStorage.getItem("exercises");
        return stored ? JSON.parse(stored) : seedExercises;
      });

      return { exercises, addExercise, updateExercise, deleteExercise }


}
export default useExcersices;