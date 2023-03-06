import { useState } from "react";

type DataParserFunction = (data: any) => any;

export interface RequestConfig extends RequestInit {
  url: string;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [encounteredError, setEncounteredError] = useState(false);

  const sendRequest = async (
    config: RequestConfig,
    dataParser?: DataParserFunction
  ) => {
    try {
      setIsLoading(true);
      const response: Response = await fetch(config.url, config);

      if (!response.ok)
        throw Error(
          `Could not complete request! See response body:\n ${JSON.stringify(
            response.body
          )}`
        );

      const data = await response.json();
      if (dataParser) dataParser(data);
      setEncounteredError(false);
    } catch (error) {
      setEncounteredError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  return {
    sendRequest,
    isLoading,
    encounteredError,
  };
};

export default useHttp;
