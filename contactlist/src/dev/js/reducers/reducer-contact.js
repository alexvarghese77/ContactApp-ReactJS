const contacts= function(){

    return [
        {
            "name":"Alex",
            "id":1,
            "phone":"123456789"
        },
        {
            "name":"Albin",
            "id":2,
            "phone":"123456789"
        },
        {
            "name":"Ammu",
            "id":3,
            "phone":"123456789"
        },
        {
            "name":"Prashanth",
            "id":4,
            "phone":"123456789"
        },
        {
            "name":"Ranjith",
            "id":5,
            "phone":"123456789"
        }
 
    ]
}


const contactDetails= (state=null,action)=>{
    switch(action.type){
        case 'USER_SELECTED': 
                               return action.payload;
                               break;
        case  'USER_DELETE':
                               debugger;
                               console.log("user deleted",state,"nfnkajf");
                               return action.payload;
                               break;
    }
    return state;
}


export {contacts,contactDetails}