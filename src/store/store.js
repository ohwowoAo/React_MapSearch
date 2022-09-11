import { configureStore, createSlice } from '@reduxjs/toolkit'


//useState랑 비슷한 역할
let search = createSlice({
  name : 'search',
  initialState : [],
  reducers : {
    addsearch(state, action){
      state.push(action.payload)
      console.log(state)

    },
    // removeId(state, action){
    //   let remove = state.filter((item) => item.id !== action.payload)
    //   return remove
    // }
  }
})




export let {addsearch} = search.actions


export default configureStore({
reducer: { 
    search : search.reducer,

}
})