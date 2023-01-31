export default function userReducer(state,action){
    switch (action.type){
        case "add_products": 
            return [action.data, ...state];
        case "remove_user": 
            return state.filter(item => item.id !== action.payload) ; 
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
                return {count: state.count - 1}; 
        case 'reset': 
                return {count: state.count = 0};    
        default:
            return state 
    }
    
}

