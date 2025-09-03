import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './U1Component/FunctionalComponent';
import ArrowFunctions from './U1Component/ArrowFunctions';
import ClassComponent from './U1Component/ClassComponent';
import PropsFunctionalComponent from './U2Props/PropsFunctionalComponent';
import PropsArrowFunctions from './U2Props/PropsArrowFnctions';
import PropsClassComponent from './U2Props/PropsClassComponent';
import StateClassComponent from './U3State/StateClassComponent';
import P1CounterApp from './U3State/P1CounterApp';
import StateFunctionalComponent from './U3State/StateFunctionalComponent';
import P2CounterApp from './U3State/P2CounterApp';
import ToggleText from './U3State/ToggleText';
import InputBox from './U3State/InputBox';
import ShowCurrentTime from './U3State/ShowCurrentTime';
import ToggleLikeButton from './U3State/ToggleLikeButton';
import ArrayValue from './U4List&Key/ArrayValue';
import ArrayValueDeleteFilter from './U4List&Key/ArrayValueDeleteFilter';
import ArrayValueDeleteSplice from './U4List&Key/ArrayValueDeleteSplice';
import ObjectValue from './U4List&Key/ObjectValue';
import ArrayofObjectValue from './U4List&Key/ArrayofObjectValue';
import InlineCSS from './U5CSS/InlineCSS';
import ExternalCSS from './U5CSS/ExternalCSS';
import CSSModules from './U5CSS/CSSModules';
import JSObjectCSS from './U5CSS/JSObjectCSS';
import ToggleDarkLightMode from './U5CSS/ToggleDarkLightMode';

import ChangeFontSize from './U5CSS/ChangeFontSize';
import CelsiustoFahrenheit from './Project/CelsiustoFahrenheit';
import GramToPavan from './Project/GramToPavan';
import PPF from './Project/PPF';
import Form from './U6Form/Form';
import ControlledForm from './U6Form/ControlledForm';
import UncontrolledForm from './U6Form/UncontrolledComponent';
import CustomCounterApp from './U7CustomHook/CustomCounterApp';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>Welcome to Credo Systemz </h1> */}
       
        {/* <FunctionalComponent/>
        <ArrowFunctions/>
        <ClassComponent/> */}


        {/* <PropsFunctionalComponent name="Sridhar" skills="React JS , Data Science, React Native, Spring Boot"/>
        <PropsArrowFunctions name="Sridhar" salary="60000"/> 
        <PropsClassComponent name="Sridhar"   role="IT Developer and Trainer"/> */}

        {/* <StateClassComponent/>    */}
        {/* <P1CounterApp/>     */}

        {/* <StateFunctionalComponent/> */}
        {/* <P2CounterApp/> */}

        {/* <ToggleText/> */}
        {/* <InputBox/> */}
        {/* <ShowCurrentTime/> */}
        {/* <ToggleLikeButton/> */}

        {/* <ArrayValue/> */}
        {/* <ArrayValueDeleteFilter/> */}
        {/* <ArrayValueDeleteSplice/> */}

        {/* <ObjectValue/> */}

        {/* <ArrayofObjectValue/> */}

        {/* <InlineCSS/> */}
        {/* <ExternalCSS/> */}
        {/* <CSSModules/> */}
        {/* <JSObjectCSS/> */}

        {/* <ToggleDarkLightMode/> */}
       {/* <ChangeFontSize/> */}

       {/* <CelsiustoFahrenheit/> */}
       {/* <GramToPavan/> */}
       {/* <PPF/> */}

       {/* <Form/> */}
       {/* <ControlledForm/> */}
       {/* <UncontrolledForm/> */}

       <CustomCounterApp/>
       
      </header>
       
    </div>
  );
}


export default App;
