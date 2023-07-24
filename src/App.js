import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import contacts from "./contacts.json";
import { FaTimes } from "react-icons/fa";
import "./App.css";




function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  console.log(contactList);
 

const deleteContact = (id) => {
   setContactList(contactList.filter((contactid) => contactid.id !==id));

}

// const toggleReminder = (toggleid) => {
// setContactList(
//   contactList.map((contact) => 
//   contact.toggleid === toggleid ? {...contact, reminder : !contact.reminder} : contact
//   )
// )
// }



const [addContact, setaddContacts] = useState (contacts.slice(5));

const addContacttoList = () => {
  setaddContacts(
    addContact[parseInt(Math.random() * addContact.length + 1)]
  )

}



const deleteNewContact = (id) => {
  setaddContacts(contactList.filter((newcontactid) => newcontactid.id !==id));

}



  return (
    <div className="App">

      <button onClick={addContacttoList}>Add Random Contact</button>
   
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
              
                <FaTimes style={{color: 'red', cursor: 'pointer'} } 
               onClick= {() => deleteContact(contact.id)}/>
              </tr>
            );
          })}
        </tbody>

        <tbody>
    
              <tr key={addContact.id}>
                <td>
                  <img alt="" key={uuidv4} src={addContact.pictureUrl} height = {100} />
                </td>
                <td>{addContact.name}</td>
                <td>{addContact.popularity}</td>
                <td>{addContact.wonOscar? <img alt="" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png" /> :""} </td>
                <td>{addContact.wonEmmy}</td>

                <FaTimes style={{color: 'red', cursor: 'pointer'} } 
               onClick= {() => deleteNewContact(addContact.id)}/>
              </tr>
    

        </tbody>
      </table>
    </div>
  );
}

export default App;
