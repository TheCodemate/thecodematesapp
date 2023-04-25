import { useEffect, useState } from 'react';
import { PetsSchema, PetsType } from '@/types';

export const usePets = () => {
  const [pets, setPets] = useState<PetsType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getPets = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('pets.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Could not fetch pets. Status not ok');
      }

      const fetchedPets: PetsType = await response.json();
      if (!PetsSchema.parse(fetchedPets)) {
        throw new Error('Fetched data is not of type PetsType');
      }

      setPets(fetchedPets);
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        throw new Error('Unexpected error happened while trying to fetch pets data');
      }
    }
  };

  useEffect(() => {
    getPets();
  }, []);

  return {
    isLoading,
    pets,
    error
  };
};
