// src/components/Loading.jsx

export const LoadingSpinner = () => {
  return (
    <div className="inline-block w-5 h-5 border-2 border-t-2 border-r-transparent border-white rounded-full animate-spin"></div>
  );
};

export const LoadingBig = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
};

export const LoadingSmall = () => {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce"></div>
    </div>
  );
};
