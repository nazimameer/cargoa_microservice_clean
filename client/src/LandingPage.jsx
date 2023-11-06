import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"
const LandingPage = () => {
    const Navigate = useNavigate();
  return (
    <div>
       <div className="h-screen w-full flex items-center justify-center bg-white gap-3">
          <Button variant="filled" onClick={() => Navigate('/user') } >User</Button>
          <Button variant="filled" onClick={ () => Navigate('/vendor')} >Vendor</Button>
        </div>
    </div>
  )
}

export default LandingPage
