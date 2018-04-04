export const contacts=(state=null,action)=>{
    switch(action.type){
        case  'USER_DELETE' :
                               return state.filter((contacts)=>contacts.id!==action.payload);
                    default :  state;
    }
    return state
}


export const ContactDetail= (state=null,action)=>{
   

    if(action.type==="USER_SELECTED")
    {
        return action.payload
    }
    return state;
}

