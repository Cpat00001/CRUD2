import {REGISTER_USER,LOGIN_USER,GET_USER,GET_ALL_USERS,DELETE_USERCRUD,EDIT_USERCRUD,PULL_USER_FROM_EDIT,UPDATE_USER_AFTER_EDIT} from '../actionsFolder/types';

const initialState = {
    users:[],
    user:{}
};

export default function(state = initialState, action){
    switch(action.type){

        case REGISTER_USER:
            return{
                ...state,
                users: [action.payload,...state.users]
            };
        case LOGIN_USER:
            return{
                ...state,
                user: state.users.filter(loguser => loguser.username === action.payload.username && loguser.password === action.payload.password),
                // 1 wez dane przeslane w login form
                // 2 sprawdz against user in register/ state
                // 3 jesli istnieje taki user - pasuja dane => wypelnij object user tymi danymi i wyslij do komponentu + przekiruj na strone po zalogowaniu
                //   else jesli taki User nie istnieje zostaw user{} empty i zostaw na stronie logi => wyswietl komunikat,ze bledne dane lub nie znaleziono usera z takim emailem
            }
        case GET_USER:
            return{
            ...state,
            user:state.user
        }
        case GET_ALL_USERS:
            return{
                ...state
            }
        case DELETE_USERCRUD:
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.payload )
            }
        case EDIT_USERCRUD:
            return{
                ...state,
                user: state.users.filter(user => user.id === action.payload.id)
            }
        case PULL_USER_FROM_EDIT:

            return{
                ...state,
                user:state.user
            }
        case UPDATE_USER_AFTER_EDIT:
            return{
                ...state,
                users:state.users.map(user => user.email === action.payload.email? (user = action.payload): user)
            }

        default:
            return state;
    }
}