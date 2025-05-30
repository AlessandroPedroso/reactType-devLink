import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";

async function handleLogout() {
  await signOut(auth);
}

export function Header() {
  return (
    <header className="flex flex-col items-center m-auto mt-4 px-2 justify-center w-full max-w-2xl">
      <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
        <div className="flex gap-4 font-medium">
          <Link to="/">Home</Link>
          <Link to="/admin">Links</Link>
          <Link to="/admin/social">Redes sociais</Link>
        </div>
        <button onClick={handleLogout} className="cursor-pointer">
          <BiLogOut size={28} color="#db2629" />
        </button>
      </nav>
    </header>
  );
}
