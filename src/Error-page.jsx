import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="centralize-items h-[100vh] w-full text-white flex-col">
      <h1 className="text-4xl">Oops!</h1>
      <p className="text-xl my-8">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}