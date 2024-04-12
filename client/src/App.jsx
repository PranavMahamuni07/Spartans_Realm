import {BrowserRouter,useNavigate, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
// import ForgotPassword from './components/ForgetPassword'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'
import HomeB from './pages/HomeB';
import HomeA from './pages/HomeA';
import GalleryM from './pages/GalleryM';
import FeaturesM from './pages/FeaturesM'
import Sample from './components/Sample'
import ContactM from './pages/ContactM'
import FeaturesA from './pages/FeaturesA'
import NutritionA from './pages/NutritionA'
import AboutA from './pages/AboutA'
import PeerA from './pages/PeerA'
import SocialA from './pages/SocialA'
import CardioA from './pages/CardioA'
import NutriA from './pages/NutriA'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/homeA' element={<HomeA />}></Route>
        <Route path='/galleryM' element={<GalleryM />}></Route>
        <Route path='/featuresM' element={<FeaturesM />}></Route>
        <Route path='/featuresA' element={<FeaturesA />}></Route>
        <Route path='/nutritionA' element={<NutritionA />}></Route>
        <Route path='/aboutA' element={<AboutA />}></Route>
        <Route path='/peerA' element={<PeerA />}></Route>
        <Route path='/socialA' element={<SocialA/>}></Route>
        <Route path='/cardioA' element={<CardioA/>}></Route>

        <Route path='/nutriA' element={<NutriA/>}></Route>

        <Route path='/contactM' element={<ContactM />}></Route>

        <Route path='/' element={<HomeB />}></Route>

        <Route path = "/signup" element={<Signup />}></Route>
        <Route path = "/login" element={<Login />}></Route>
        {/* <Route path = "/forgotPassword" element={<ForgotPassword />}></Route> */}
        <Route path = "/resetPassword/:token" element={<ResetPassword />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/sample" element={<Sample />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
