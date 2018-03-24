export default (state=null,action)=>{
    console.log("actions:",action);
     switch(action.type){
         case 'USER_SELECTED': return action.payload;break;
     }
     return state;
}