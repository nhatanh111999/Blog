import { createSlice } from '@reduxjs/toolkit'

const list=[
    {
        id:1,
        username:'nhat anh',
        age:22
    },
    {  id:2,
        username:'hoang hiep',
        age:23
    },
    {  id:3,
        username:'quoc hung',
        age:25
    },
]

const todosSlice = createSlice({
    name: 'todos',
    initialState: list,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload)
          },
        deleteItem:(state,action)=>{
            state=state.filter(item=>item.id !== action.payload)
            return state;
        }
    }
  });
  
  const {reducer,actions}=todosSlice;
  export const {addTodos,deleteItem}=actions;
  export default reducer;