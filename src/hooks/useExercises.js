import { useState, useEffect} from 'react';
import {exercises as seedExercises} from './../seedData';


const useExercises  = () => {


    const addExercise = (exercise) => {
      setExercises(prev => [...prev, exercise]);
    }
    const updateExercise = (id, updatedFields) => {
      setExercises(prev =>
        prev.map(ex => ex.id === id ? { ...ex, ...updatedFields } : ex)
      );
    }
    const deleteExercise = (id) => {
      setExercises(prev => prev.filter(ex => ex.id !== id));
    }


    const [exercises, setExercises] = useState(() => {
        const stored = localStorage.getItem("exercises");
        return stored ? JSON.parse(stored) : seedExercises;
      });

      useEffect(() => {
        localStorage.setItem("exercises", JSON.stringify(exercises));
      }, [exercises]);

      return { exercises, addExercise, updateExercise, deleteExercise }


}
export default useExercises;