import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import useNetworkStatus from "./hooks/useNetworkStatus";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";


const App = () => {

  const { authUser } = useAuthContext();

  useNetworkStatus();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>

      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App