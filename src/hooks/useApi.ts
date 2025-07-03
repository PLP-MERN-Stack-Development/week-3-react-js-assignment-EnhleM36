
import { useState, useEffect } from 'react';

export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(url: string, searchQuery?: string) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        
        // Filter data if search query is provided
        if (searchQuery && Array.isArray(data)) {
          data = data.filter((item: any) =>
            item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.body?.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'An error occurred',
        });
      }
    };

    fetchData();
  }, [url, searchQuery]);

  return state;
}
