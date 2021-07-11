import './main.css';
import Title from './components/atoms/Title';
import Info from './components/atoms/Info';

function App() {
  return (
    <div className="App">
      <Title name='Web' />
      <Title name='Games' />
      <Title name='About' />
      <Info text='pparagraph placeholder text right hereparagraph placeholder text right hereparagraph placeholder text right herearagraph placeholder text right here' />
    </div>
  );
}

export default App;
