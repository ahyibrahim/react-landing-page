import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import Section from './components/section';
import iggy from './resources/images/iggy.jpg'

function App() {
  return (
    <div className="App">
      <div>
        <Section headline="Testing Headline" content="Testing Content"></Section>
      </div>
    </div>
  );
}

export default App;
