const themeDark ={
    themeBackground: "#2E2E2E",
    themeText : "#fff",
    themeColor: "green"
}

const themeLigth ={
    themeBackground: "#fff",
    themeText : "#000",
    themeColor: "red"
}

const themeDefault ={
    themeBackground: "#fff",
    themeText : "#000",
    themeColor: "silver"
}

const initialState = themeDefault
   
export default (state = initialState, action) => {

    /*
if(action.payload ==="dark" || action.payload ==="light" || action.payload ==="default" ){
    return themeDark;
}
*/

if(action.payload ==="dark"){ return themeDark;}
if(action.payload ==="light"){return themeLigth;}
if(action.payload ==="default"){return themeDefault;}

return state;

   /* switch(action.payload){
        case "dark" :
            return themeDark;

        case "light" :
            return themeLigth;

        case "default" :
            return themeDefault;

        default: state
    }*/
}