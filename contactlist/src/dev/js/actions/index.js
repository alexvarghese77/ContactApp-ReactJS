export const ContactDetail=(Contact)=>{
    return {
        type: 'USER_SELECTED',
        payload: Contact 
    }
}
export const DeleteContact=(state,Contact)=>{
    return {
        type: 'USER_DELETE',
        payload: Contact 
    }
}


