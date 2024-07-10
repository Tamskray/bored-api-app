import { useState, useEffect } from "react";
import axios from "axios";

import { Idea } from "../types";

interface Response {
    data: Idea[];
    isLoading: boolean;
    error?: string;
    request: () => void;
  };

const useFetch = (endpoint: string): Response => {
    const [data, setData] = useState<Idea[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
  
    useEffect(() => {
      sendRequest();
    }, []);

    const request = () => {
        sendRequest();
    };

    const sendRequest = () =>{
        setIsLoading(true);

        const requests = [];

        for (let i = 0; i < 4; i++) {
          requests.push(
            axios.get(endpoint, { baseURL: import.meta.env.VITE_API_URL })
              .then((res) => {
                return { idea: res.data.activity, category: res.data.type };
              })
              .catch((err) => {
                throw new Error(err.message);
              })
          );
        }

        Promise.all(requests)
        .then((res) => {
          setError("");
          setData(res);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  
    return {
      data,
      isLoading,
      error,
      request
    };
  };
  
  export default useFetch;