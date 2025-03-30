import { Link } from "react-router";
import {Input} from '../../components/Input'
import { FormEvent, useState } from "react";

export function Login() {

  const [email,setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    
    console.log({
      email: email,
      password:password
    })
  }
  
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>

      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-1 ">

        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu email..." />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" />
        
        <button type="submit" className="cursor-pointer h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
          Acessar
        </button>
      </form>

      
    </div>
  );
}
