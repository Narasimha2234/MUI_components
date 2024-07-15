
import { Box, CssBaseline } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import ThemeProviderComp from './components/theme/ThemeProviderComp';
import SideNav from './components/sidebar/SideNav';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import AllButtons from './components/buttons/AllButtons';
import CheckBox from './components/checkbox/CheckBox';
import FAB from './components/FAB/FAB';
import RadioComp from './components/radio/Radio';
import RatingComp from './components/ratings/Rating';
import Select from './components/select/Select';
import Sliders from './components/slider/Sliders';
import Switches from './components/switches/Switches';
import TextFieldComp from './components/textField/TextFieldComp';
import ToggleButtons from './components/toggleButton/ToggleButtons';
import Avatars from './components/avathar/Avatars';
import BadgesComp from './components/badge/BadgesComp';
import Chips from './components/chips/Chips';
import ListsComp from './components/list/ListsComp';
import Tables from './components/table/Tables';
import ToolTips from './components/tooltip/ToolTips';
import TypographyComp from './components/typography/Typography';
import Alerts from './components/alerts/Alerts';
import BackDrops from './components/backdrop/BackDrops';
import Dialogs from './components/dialog/Dialogs';
import ProgressComp from './components/progress/ProgressComp';
import Skeletons from './components/skeleton/Skeletons';
import SnackBars from './components/snackbar/SnackBars';
import Accodrians from './components/accordions/Accodrians';
import Cards from './components/card/Cards';
import Papers from './components/paper/Papers';
import BottomNavigations from './components/bottomnavigation/BottomNavigations';
import BreadCrumbs from './components/breadcrumbs/BreadCrumbs';
import MenuBlocks from './components/menu/MenuBlocks';
import Paginations from './components/pagination/Paginations';
import SpeedDails from './components/speedDail/SpeedDails';
import Steppers from './components/stepper/Steppers';
import Models from './components/model/Models';
import Poppovers from './components/poppovers/Poppovers';
import FormHandling from './components/form/FormHandling';
import FormHandlingTwo from './components/form/FormTwo';





function App() {
  const [show,setShow]=useState(false)
   const handleshow=()=>{ 
      setShow(!show)
   }
  return (
   <ThemeProviderComp>
    <CssBaseline/>
    <BrowserRouter>
   
     <Box className="App">
    <Header handleShow={handleshow}/>
    <Box className="content">
        <SideNav handleShow={handleshow} show={show}></SideNav>
        <Routes>
          <Route path='/home'  element={<Home/>}></Route>
          <Route path='/button' element={<AllButtons/>}></Route>
          <Route path='/checkbox' element={<CheckBox/>}></Route>
          <Route path='/fab' element={<FAB/>}></Route>
          <Route path='/radio' element={<RadioComp/>}></Route>
          <Route path='/rating' element={<RatingComp/>}></Route>
          <Route path='/select' element={<Select/>}></Route>
          <Route path='/sliders' element={<Sliders/>}></Route>
          <Route path='/switches' element={<Switches/>}></Route>
          <Route path='/textfield' element={<TextFieldComp/>}></Route>
          <Route path='/togglebtn' element={<ToggleButtons/>}></Route>
          <Route path='/avatar' element={<Avatars/>}></Route>
          <Route path='/badge' element={<BadgesComp/>}></Route>
          <Route path='/chip' element={<Chips/>}></Route>
          <Route path='/list' element={<ListsComp/>}></Route>
          <Route path='/tables' element={<Tables/>}></Route>
          <Route path='/tooltips' element={<ToolTips/>}></Route>
          <Route path='/typography' element={<TypographyComp/>}></Route>
          <Route path='/alert' element={<Alerts/>}></Route>
          <Route path='/backDrop' element={<BackDrops/>}></Route>
          <Route path='/dialog' element={<Dialogs/>}></Route>
          <Route path='/progress' element={<ProgressComp/>}></Route>
          <Route path='/skeleton' element={<Skeletons/>}></Route>
          <Route path='/snackbar' element={<SnackBars/>}></Route>
          <Route path='/accordion' element={<Accodrians/>}></Route>
          <Route path='/card' element={<Cards/>}></Route>
          <Route path='/paper' element={<Papers/>}></Route>
          <Route path='/bottom' element={<BottomNavigations/>}></Route>
          <Route path='/breadcrumbs' element={<BreadCrumbs/>}></Route>
          <Route path='/menu' element={<MenuBlocks/>}></Route>
          <Route path='/pagination' element={<Paginations/>}></Route>
          <Route path='/speeddail' element={<SpeedDails/>}></Route>
          <Route path='/stepper' element={<Steppers/>}></Route>
          <Route path='/model' element={<Models/>}></Route>
          <Route path='/poppover' element={<Poppovers/>}></Route>
          <Route path='/form' element={<FormHandlingTwo/>}></Route>

        </Routes>
    </Box>
      
    </Box>
   
    </BrowserRouter>
   </ThemeProviderComp>
  );
}

export default App;
