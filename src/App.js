import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import contacts from "./contacts.json";
import { FaTimes } from "react-icons/fa";
import "./App.css";




function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  console.log(contactList);
 

  const remainingContacts = contacts.slice(5);



function randomContact() {
  if (remainingContacts.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1)[0];
    setContactList((previouscontactList) => [
      ...previouscontactList, randomContact,
    ]); 
  }
}



function sortByName() {
  const sortedContacts = [...contactList].sort((a, b)=>
  a.name.localeCompare(b.name));
  setContactList(sortedContacts); 
}


function sortByPopularity() {
  const sortedContacts = [...contactList].sort(
    (a, b) => b.popularity - a.popularity
  ); 
  setContactList(sortedContacts)
}


function deleteEachContact(contactId) {
const updateContacts = contactList.filter((contact)=> contact.id !== contactId);
setContactList(updateContacts);
}






  return (
    <div className="App">

        <h1>IronContact</h1>
      <button style={{color: 'green'}} onClick={randomContact}>Add Random Contact</button>

      <button style={{color: 'green'}} onClick={sortByName}>Sort by Name</button>

      <button style={{color: 'green'}} onClick={sortByPopularity}>Sort by Popularity</button>
   
  
      <table  className="center">
        <thead>
          <tr>
            <th id="tr-style">Picture</th>
            <th id="tr-style">Name</th>
            <th id="tr-style">Popularity</th>
            <th id="tr-style">won<br></br>Oscar</th>
            <th id="tr-style">won<br></br>Emmy</th>
            <th id="tr-style">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <tr key={contact._id}>
                <td>
                  <img alt="" src={contact.pictureUrl} height = {115} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar? <img alt="" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png" height = {40}/> :"" } </td>
                <td>{contact.wonEmmy}</td>
                <td className="deletebtn-style">
                <FaTimes style={{color: 'red', cursor: 'pointer'} } 
               onClick= {() => deleteEachContact(contact.id)}/>
               </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
