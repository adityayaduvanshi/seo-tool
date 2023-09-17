import { useEffect, useState } from 'react';

export function useGetData<T>(url: string): {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const postData = async () => {
      setIsLoading(true);

      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };
        const login = 'aditya97y@gmail.com';
        const password = '9a16ba915cefe4f4';
        const authString = `Basic ${Buffer.from(
          `${login}:${password}`
        ).toString('base64')}`;
        headers['Authorization'] = authString;
        const response = await fetch(
          'https://api.dataforseo.com/v3/on_page/instant_pages',
          {
            method: 'POST',
            headers,
            body: JSON.stringify([
              {
                url: url,
                enable_javascript: true,
                check_spell: false,
              },
            ]),
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    postData();
  }, [url]);
  return { data, isLoading, error };
}
