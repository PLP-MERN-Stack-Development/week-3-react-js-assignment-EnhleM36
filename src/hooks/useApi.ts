import { useState, useEffect } from 'react';

export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(url: string, searchQuery?: string, limit?: number) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        // Add limit parameter to URL if provided
        const fetchUrl = limit ? `${url}?_limit=${limit}` : url;
        const response = await fetch(fetchUrl);
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

        // Limit data if limit is provided
        if (limit && Array.isArray(data)) {
          data = data.slice(0, limit);
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
  }, [url, searchQuery, limit]);

  return state;
}
