export const ContactDetail=(Contact)=>{
    console.log("You are clicked an action")
    return {
        type: 'USER_SELECTED',
        payload: Contact 
    }
}

