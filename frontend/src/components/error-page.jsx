import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oopsie!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
