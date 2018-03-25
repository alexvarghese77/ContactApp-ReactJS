export default (state=null,action)=>{
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