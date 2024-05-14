import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContext from "./context/UserContext"
import UserContextProvider from "./context/UserContextProvider"

export function App() {


  return (
    <UserContextProvider>
    <h1>React with chai aur code</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}
