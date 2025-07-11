import { useState, useEffect} from 'react';
import {stations as seedStation} from "../seedData";

const useStations = () => {
    const [stations, setStations] = useState(()=> {
        const stored = localStorage.getItem('stations');
        return stored ? JSON.parse(stored) : seedStation
    });

    const addStation = (station) => {
        setStations(prev => [...prev, station]);
      };

      const updateStation = (id, updatedFields) => {
        setStations(prev => prev.map(s => s.id === id ? { ...s, ...updatedFields } : s));
      };

      const deleteStation = (id) => {
        setStations(prev => prev.filter(s => s.id !== id));
      };

    useEffect(() => {
        const stored = localStorage.getItem('stations');
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            setStations(parsed);
          } catch (e) {
            console.error('Chyba při načítání z localStorage',e );
          }
        }
      }, []);

      useEffect(() => {
        localStorage.setItem('stations',JSON.stringify(stations))
      },[stations])

      return { stations, addStation, updateStation, deleteStation };

}
export default useStations;