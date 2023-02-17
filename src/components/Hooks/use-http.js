import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)

  const sendRequest = useCallback(
    async (requestConfig, applyData = () => {}) => {
      setIsLoading(true);
      setError(null);
      setSuccess(null)
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        setSuccess("success")

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        applyData(data);
      } catch (error) {
        setError(error.message);
      }
      
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading: isLoading,
    error: error,
    success: success,
    setError: setError,
    setSuccess: setSuccess,
    sendRequest: sendRequest,
  };
};

export default useHttp;
