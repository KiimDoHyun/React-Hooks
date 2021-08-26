import useAxios from "../hooks/useAxios.js";

const useAxiosHook = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  //   console.log(
  //     `Loading:  ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  //   );
  return (
    <div>
      <h1>UseAxios</h1>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default useAxiosHook;
