import {useState} from 'react'

const LoggedIn = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   const handleLogin = () =>{
      console.log(`login user`)
      setIsLoggedIn(true)
   }
   const handleLogout = () =>{
      console.log(`Logout user`)
      setIsLoggedIn(false)
   }

  return (
    <div>
   <button onClick={handleLogin}>Login</button>
   <button onClick={handleLogout}>Logout</button>
   <div>
      User is {isLoggedIn ? 'logged in': 'logout'}
   </div>
    </div>
  )
}

export default LoggedIn
