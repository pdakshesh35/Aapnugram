const initialstate = {
    username : "daksh",
    password : "heli"
};

 const LoginReducer = (state = initialstate, action) => {
     switch(action.type){
         case 'LOGIN':
             console.log('Login with credential : ', action.credential);
             return state;
         case 'LOGIN_ERROR':
             console.log('Login error : ', action.err);
             return state;
         default:
             return state;
     }

};
 export default LoginReducer