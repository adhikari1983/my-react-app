import Navbar from './components/NavBar.jsx';
import { Routes, Route } from 'react-router-dom';
import DisplayHomePage from './components/01intro-function/DisplayHomePage.jsx';
import Card from './components/02card-component/Card.jsx';
import DisplayButtons from './components/03add-css/DisplayButtons.jsx';
import PropsDemo from './components/04fourth-class-props/PropsDemo.jsx';
import DisplayList from './components/06render-lists/DisplayList.jsx';
import ConditionalRendering from './components/05conditional-rendring/ConditionalRendering.jsx';
import ButtonType from './components/07click-event/ButtonType.jsx';
import DisplayMyComponent from './components/08reacthook-usestate/DisplayMyComponent.jsx';
import CounterDisplay from './mini-projects/07counter/CounterDisplay.jsx';
import DisplayMyComponent01 from './components/09reacthook-onchange/DisplayMyComponent01.jsx';
import ColorPickerDisplay from './mini-projects/10color-picker/ColorPickerDisplay.jsx';
import DisplayMyComponent02 from './components/14update-objects-instate/DisplayMyComponent02.jsx';
import DisplayMyComponent03 from './components/12update-arrays-instate/DisplayMyComponent03.jsx';
import DisplayMyComponent04 from './components/13Update-array-of-obj-instate/DisplayMyComponent04.jsx';
import DisplayMyComponent05 from './components/16reacthook-useeffect/DisplayMyComponent05.jsx';
import DisplayMyComponent06 from './components/18reacthook-usecontext/DisplayMyComponent06.jsx';
import DisplayMyComponent07 from './components/19reacthook-useref/DisplayMyComponent07.jsx';
//<Link> → creates a clickable navigation element with it's defined path.
//<Route> → tells React which component to render for which URL path.
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Routes>
          <Route path='*' element={<h2>404 - Page Not Found 😒😒😒😒</h2>} /> {/* for any other/random path */}
          <Route path='/' element={<DisplayHomePage/>} />
          <Route path='/card' element={<Card/>} />
          <Route path='/display-buttons' element={<DisplayButtons/>} />
          <Route path='/props' element={<PropsDemo/>} />
          <Route path='/conditional' element={<ConditionalRendering/>} />
          <Route path='/list' element={<DisplayList/>} />
          <Route path='/button' element={<ButtonType/>} />
          <Route path='/usestate' element={<DisplayMyComponent/>} />
          <Route path='/counter' element={<CounterDisplay/>} />
          <Route path='/onchange' element={<DisplayMyComponent01/>} />
          <Route path='/colorpicker' element={<ColorPickerDisplay/>} />
          <Route path='/usestate-objects' element={<DisplayMyComponent02/>} />
          <Route path='/usestate-arrays' element={<DisplayMyComponent03/>} />
          <Route path='/usestate-array-of-objects' element={<DisplayMyComponent04/>} />
          <Route path='/useeffect' element={<DisplayMyComponent05/>} />
          <Route path='/usecontext' element={<DisplayMyComponent06/>} />
          <Route path='/useref' element={<DisplayMyComponent07/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
