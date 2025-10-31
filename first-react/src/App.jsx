import Header from './components/01intro-function/Header.jsx';
import Footer from './components/01intro-function/Footer.jsx';
import Food from './components/01intro-function/Food.jsx';
import Card from './components/02card-component/Card.jsx';
import Button from './components/03add-css/Button1.jsx'
import PropsDemo from './components/04fourth-class-props/PropsDemo.jsx';
import DisplayList from './components/06render-lists/DisplayList.jsx';
import ConditionalRendering from './components/05conditional-rendring/ConditionalRendering.jsx';
import ButtonType from './components/07click-event/ButtonType.jsx';
import DisplayMyComponent from './components/08reacthook-usestate/DisplayMyComponent.jsx';
import DisplayCounter from './components/08reacthook-usestate/CounterDisplay.jsx';
import DisplayMyComponent01 from './components/09reacthook-onchange/DisplayMyComponent01.jsx';
import Button1 from './components/03add-css/Button1.jsx';

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Food />
      <Card />
      <Button1 />
      <PropsDemo />
      <ConditionalRendering />
      <DisplayList />
      <ButtonType/>
      <DisplayMyComponent/>
      <DisplayCounter/>
      <DisplayMyComponent01/>
    </div>
  );

}

export default App
