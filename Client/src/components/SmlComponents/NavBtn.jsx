import { Link } from "react-router-dom";
export default function NavBtn({ button, route }) {
  return (
    <Link
      to={route}
      className="min-w-fit px-2 py-1 text-white font-semibold rounded hover:bg-indigo-600 md:ml-4"
    >
      {button}
    </Link>
  );
}