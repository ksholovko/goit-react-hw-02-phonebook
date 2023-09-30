import css from "./conctactList.module.css"

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) => (<li key={id} className={css.contactItem}>
             {name}  {number}   <button className={css.button} onClick={() => onDeleteContact(id)}>Delete</button></li>))}
        </ul>
    )
}