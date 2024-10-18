import React, { useContext, useEffect } from "react";
import Routing from "./Pages/Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Pages/Utility/action.type";
import { auth } from "./Pages/Utility/firebase";
 

function App() {
  const [{user},dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // console.log(authUser)
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
         dispatch({
           type: Type.SET_USER,
           user: null,
         });
      }
    })

  },[])
  return <>
  <Routing/>
     
  </>;
}

export default App;
