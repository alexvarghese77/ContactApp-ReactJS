export const ContactDetail=(Contact)=>{
    return {
        type: 'USER_SELECTED',
        payload: Contact 
    }
}
export const DeleteContact =(id)=>{
    return {
          type: 'USER_DELETE',
          payload: id
      }
}


