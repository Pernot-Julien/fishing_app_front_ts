import axios from "axios";
import { useEffect, useState } from "react";

const AdminFishForm = () => {
  //?fish's state
  const [fish, setFish] = useState({
  espece:"",
  taille:"",
  description:"",
  fishGetList: [],
  });
  //? send POST and GET requests when the trigger change
  const [trigger, setTrigger] = useState(false);

  const handleChangeDynamicFish = (e: React.FormEvent<HTMLInputElement>) => {
  setFish(fish => ({
  ...fish,
  [e.target.name] : e.target.value
  }))
  };

  const handleSubmitFish = (e) => {
    e.preventDefault();
  
    const data = {
      espece: fish.espece,
      taille: fish.taille,
      description: fish.description
    }
    axios.post('http://localhost:3000/fish', data)
    .then((r) => {
      setFish(fish => ( {
        ...fish,
        espece:"",
        taille:"",
        description:"",
      }))
      setTrigger(!trigger)})
    .catch((e) => console.log(e)) 
  }


  const handleDeleteFish = (id) => {
    axios.delete(`http://localhost:3000/fish/${id}`)
    .then((r) => {console.log(r);
      setTrigger(!trigger)})
    .catch((e) => console.log(e))
  }

  useEffect(() => {
    axios.get('http://localhost:3000/fish')
    .then((r) => setFish(fish =>( 
    {
      ...fish,
      fishGetList : r.data,
    }
  )
    ))
    .catch((e) => console.log(e))
  },[trigger])
  
      return (
        <>
        <h1 className="text-3xl font-bold underline">Fish</h1>
        <form className="border-2 border-sky-500 p-3" onSubmit={handleSubmitFish}>
          <label className="ml-2">Espece</label>
          <input className="border-2 border-sky-500 ml-2" name='espece'type="text" value={fish.espece} onChange={handleChangeDynamicFish} />
          <label className="ml-2">Taille</label>
          <input className="border-2 border-sky-500 ml-2" name='taille' type="text" value={fish.taille} onChange={handleChangeDynamicFish} />
          <label className="ml-2">Description</label>
          <input className="border-2 border-sky-500 ml-2" name='description'type="text" value={fish.description} onChange={handleChangeDynamicFish} />
          <button className="border-2 border-sky-500 ml-2" type="submit">Envoyer</button>
        </form> 
        <table className="table-auto mt-6 ml-6">
          <thead className="border-2 border-green-600">
            <tr>
              <th className="border-2 border-green-600">espèce</th>
              <th className="border-2 border-green-600">taille</th>
              <th className="border-2 border-green-600">description</th>
            </tr>
          </thead>
          <tbody>
            { 
              fish.fishGetList.map((item) =>
                <tr key={item.ID}>
                  <td className="border-2 border-green-600 p-6">{item.espece}</td>
                  <td className="border-2 border-green-600 p-6">{item.taille}</td>
                  <td className="border-2 border-green-600 p-6">{item.description}</td>
                  <td className="border-2 border-green-600 p-6"><button onClick={()=> handleDeleteFish(item.ID)} >X</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
        </>
      )
    }
    export default  AdminFishForm