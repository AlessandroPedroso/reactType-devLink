import { FormEvent, useState, useEffect } from 'react'
import { Input } from "../../components/Input";

import { db } from "../../services/firebaseConnection"
import { setDoc, doc, getDoc } from "firebase/firestore"

export function Networks() {
  const [facebook, setFacebook] = useState<string>('')
  const [instagram, setInstagram] = useState<string>("")
  const [youtube, setYoutube] = useState<string>("")

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link")

      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setFacebook(snapshot.data()?.facebook)
            setInstagram(snapshot.data()?.instagram)
            setYoutube(snapshot.data()?.youtube)
          }
        })
    }

    loadLinks()
  }, [])


  function handleRegister(e: FormEvent) {
    e.preventDefault()

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO")
      })
      .catch((error) => {
        console.log("ERRO AO SALVAR" + error)
      })
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2 ">
      <h1 className="text-white text-2xl font-medium mt-8 mb-4" >Minhas redes sociais</h1>

      <form className=" flex flex-col max-w-xl w-full" onSubmit={handleRegister} >
        <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
        <Input
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          type="url"
          placeholder="Digite a url do facebook..."
        />
        <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
        <Input
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          type="url"
          placeholder="Digite a url do instagram..."
        />

        <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
        <Input
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
          type="url"
          placeholder="Digite a url do youtube..."
        />

        <button
          type="submit"
          className='text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium'
        >
          Salvar links
        </button>

      </form>

    </div>
  );
}
