import axios from "axios";
import { useEffect, useState } from "react";

const AdminFishForm = () => {
    
    const [fish, setFish] = useState([]);
    const [trigger, setTrigger] = useState(false);
    
      const handleSubmitFish = (e) => {
        e.preventDefault();
        console.log('dfgfddrfgdf')
        const form = e.target;
        const elements = form.elements;
        const espece = elements.espece.value;
        const taille = elements.taille.value;
        const description = elements.description.value;
        console.log(espece);
    
        const data = {
          espece,
          taille,
          description,
        }
        axios.post('http://localhost:3000/fish', data)
        .then((r) => {form.reset();
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
        .then((r) => setFish(r.data) )
        .catch((e) => console.log(e))
      },[trigger])
    
    
    console.log('fish',fish) 
  
      return (
        <>
        <h1 className="text-3xl font-bold underline">Fish</h1>
        <form className="border-2 border-sky-500 p-3" onSubmit={handleSubmitFish}>
          <label className="ml-2">Espece</label>
          <input className="border-2 border-sky-500 ml-2" name='espece'type="text" />
          <label className="ml-2">Taille</label>
          <input className="border-2 border-sky-500 ml-2" name='taille' type="text" />
          <label className="ml-2">Description</label>
          <input className="border-2 border-sky-500 ml-2" name='description'type="text" />
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
              fish.map((item) =>
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