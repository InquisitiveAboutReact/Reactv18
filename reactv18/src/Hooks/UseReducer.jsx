import React , {useReducer} from 'react'

const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count:state.count+1,
        showText:state.showText
      }
     case 'ToggleShowText': 
      return {
        count:state.count,
        showText:!state.showText
      }
      default:
        return state
  }

}
function UseReducer() {

  const [state, dispatch] = useReducer(reducer,  {count:0, showText:true})

  return (
    <>
    <h2>UseReducer Hook</h2>
    <p>Count: {state.count}</p>
    <button onClick={()=>{
      dispatch({type:'INCREMENT'})
      dispatch({type:'ToggleShowText'})
    }}>
      Click
      </button>
      {state.showText && <h2>This is a Text</h2>}
    </>
    
  )
}

export default UseReducer