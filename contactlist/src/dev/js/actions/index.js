export const ContactDetail=(Contact)=>{
    return {
        type: 'USER_SELECTED',
        payload: Contact 
    }
}
export const DeleteContact =(Contact)=>{
    debugger;
    return (dispatch, getState) => {
        const { contacts } = getState();
    
        dispatch({
          type: 'USER_DELETE',
          payload: Contact
        });
      };











    debugger;
    return {
        type: 'USER_DELETE',
        payload: Contact 
    }
}


