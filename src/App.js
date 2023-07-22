import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  console.log(contactList);

const [counter, setCounter] = useState (contacts.slice(5));
const increaseCounter = () => {
  setCounter(counter + 1) ; 
}




  return (
    <div className="App">

      <button onClick={increaseCounter}>Add Random Contact</button>
   
      <h1>IronContact</h1>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>wonOscar</th>
            <th>wonEmmy</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact._id}>
                <td>
                  <img alt="" src={contact.pictureUrl} height = {100} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar? <img alt="" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png" /> :""} </td>
                <td>{contact.wonEmmy}</td>
              </tr>
            );
          })}
        </tbody>

        <tbody>
        {counter.map((counterList) => {
      return (
              <tr key={counterList._id}>
                <td>
                  <img alt="" src={counterList.pictureUrl} height = {100} />
                </td>
                <td>{counterList.name}</td>
                <td>{counterList.popularity}</td>
                <td>{counterList.wonOscar? <img alt="" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png" /> :""} </td>
                <td>{counterList.wonEmmy}</td>
              </tr>
      );
            })}

        </tbody>
      </table>
    </div>
  );
}

export default App;
