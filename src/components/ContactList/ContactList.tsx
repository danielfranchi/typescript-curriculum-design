import { ContactList2 } from '../../types/ContactList'

const ContactList = (props: ContactList2) => {
    
    return (
        <div className="lista-de-contatos">
                <li>
                    <div className="item-contato">
                        <h4>{props.contactList.tipo}</h4> 
                        <p>{props.contactList.contato}</p>                                
                    </div>
                </li>
        </div>
    )
}

export default ContactList