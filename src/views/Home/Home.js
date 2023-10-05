import React, { useState } from "react";
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import "./Home.css";

function Home(){
    const [contacts,setContacts] = useState([
    {
        Name: 'Piyush',
        Mobile: '8390074057',
        Email:'piyushaglawe05@gmail.com'
    },
    {
        Name: 'Dhanashree',
        Mobile: '8390074056',
        Email:'dhanashree05@gmail.com'
    },
    {
        Name: 'Harshal',
        Mobile: '8390074055',
        Email:'harshal05@gmail.com'
    },
    {
        Name: 'Abhijit',
        Mobile: '8390074054',
        Email:'abhijit05@gmail.com'
    }
]);
    return(
        <div className="app-title">
            <h1>📞 Contact App</h1>

            <div className="app-body">
               
               <div className="contact-container">
                <h1>Show Contact</h1>
                {
                    contacts.map((contacts,index)=>{
                        const {Name,Mobile,Email} = contacts;
                        return (<ContactsCard key={index} 
                            Name={contacts.Name} 
                            Mobile={contacts.Mobile} 
                            Email={contacts.Email} />)
                            

                    })
                }
               </div>

               <div className="add-contact-container">
                <h1>Add Contact</h1>
               </div>
            </div>
      </div>
    )
}

export default Home