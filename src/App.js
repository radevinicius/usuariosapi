
import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  //Utilizando o useState para mudar o estado quando receber a lista de arrays
  const [list, setlist] = useState([]);
  //Utilizando o useEffect para receber as informaçoes do backend e setando as informaçoes na variavel list
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setlist(data.list));
      
  }, []);

  return (
     <ul class="list-group">
      {/* Mapeando as informaçoes do backend pela variavel list e retornando as informaçoes necessarias para o frontend */}
        {list.map(item => {
          return <li >{"ID: "+ item.id}, 
          {"Nome: " + item.name},  
          {"Usuário: " + item.username}, 
          {"E-Mail: " + item.email}
          </li>;
        })}
      </ul>
  );
}

export default App