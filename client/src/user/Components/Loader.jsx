import { Spinner } from "@material-tailwind/react";
 
export function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spinner className="h-10 w-10" />
    </div>
  );
}