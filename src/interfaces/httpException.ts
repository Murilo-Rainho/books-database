interface httpException extends Error {
  status: number;
  message: string;
};

export default httpException;
