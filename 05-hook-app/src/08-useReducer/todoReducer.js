export const todoReducer=(initialState = [], action)=>{

    switch (action.type) {
        case "[TODO] add Todo":
            return [...initialState, action.payload];
        case "[TODO] remove Todo":
            return initialState.filter((data)=>{
                return data.id !== action.payload;
            });
        case "[TODO] Toggle Todo":
            return initialState.map((data)=>{
                 if(data.id === action.payload){
                    return { 
                        ...data,
                        done: !data.done
                    }
                 }
                return data;
            });
        default:
            return initialState;
    }
}