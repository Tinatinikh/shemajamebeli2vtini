export default function userReducer(state,action){
    switch (action.type){
        case "set_users": 
            return action.data;
        case "add_users": 
            return [action.data, ...state];
        case "remove_user": 
            return state.filter(item => item.id !== action.payload) ; 
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
                return {count: state.count - 1};   
        default:
            return state 
    }
    
}

