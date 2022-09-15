import { configureStore, createSlice } from '@reduxjs/toolkit'


//useState랑 비슷한 역할
let search = createSlice({
  name : 'search',
  initialState : '강남 롯데백화점',
  reducers : {
    addsearch(state, action){
      state = action.payload
      console.log(state)
      if (typeof state === 'undefined') {
        throw Error(
          'A case reducer on a non-draftable value must not return undefined'
        )
      }
    
      return state
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