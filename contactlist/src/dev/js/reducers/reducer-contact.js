export const contacts=(state=null,action)=>{
    switch(action.type){
        case 'USER_SELECTED': 
                               return action.payload;
        case  'USER_DELETE' :
                               return action.payload;
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

