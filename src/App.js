import './App.css';
import "antd/dist/antd.css";
import Section from './components/section';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Section headline="Testing Headline" content="Testing Content"></Section>
      </div>
    </div>
  );
}

export default App;
