import Header from './components/01intro-function/Header.jsx';
import Footer from './components/01intro-function/Footer.jsx';
import Food from './components/01intro-function/Food.jsx';
import Card from './components/02card-component/Card.jsx';
import PropsDemo from './components/04fourth-class-props/PropsDemo.jsx';
import DisplayList from './components/06render-lists/DisplayList.jsx';
import ConditionalRendering from './components/05conditional-rendring/ConditionalRendering.jsx';
import ButtonType from './components/07click-event/ButtonType.jsx';
import DisplayMyComponent from './components/08reacthook-usestate/DisplayMyComponent.jsx';
import DisplayMyComponent01 from './components/09reacthook-onchange/DisplayMyComponent01.jsx';
import DisplayButtons from './components/03add-css/DisplayButtons.jsx';
import ColorPickerDisplay from './mini-projects/10color-picker/ColorPickerDisplay.jsx';
import DisplayMyComponent02 from './components/14update-objects-instate/DisplayMyComponent02.jsx';
import DisplayMyComponent03 from './components/12update-arrays-instate/DisplayMyComponent03.jsx';
import DisplayMyComponent04 from './components/13Update-array-of-obj-instate/DisplayMyComponent04.jsx';
import DisplayMyComponent05 from './components/16reacthook-useeffect/DisplayMyComponent05.jsx';
import DisplayMyComponent06 from './components/18reacthook-usecontext/DisplayMyComponent06.jsx';
import CounterDisplay from './mini-projects/07counter/CounterDisplay.jsx';
import DisplayMyComponent07 from './components/19reacthook-useref/DisplayMyComponent07.jsx';
// help need from copilot
// i want to add routing in my react app using react-router-dom for all the folder 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Food />
      <Card />
      <DisplayButtons />
      <PropsDemo />
      <ConditionalRendering />
      <DisplayList />
      <ButtonType />
      <DisplayMyComponent />
      <CounterDisplay />
      <DisplayMyComponent01 />
      <ColorPickerDisplay />
      <DisplayMyComponent02 />
      <DisplayMyComponent03 />
      <DisplayMyComponent04 />
      <DisplayMyComponent05 />
      <DisplayMyComponent06 />
      <DisplayMyComponent07 />
      
    </div>
  );

}

export default App
