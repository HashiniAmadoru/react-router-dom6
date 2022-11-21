import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import Button from '@mui/material/Button';


export const Profile = () =>{
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return(
    <div>
      Welcome {auth.user}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}
