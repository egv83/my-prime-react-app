import {Button} from 'primereact/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button icon="pi pi-check" ></Button>
        
          <Button label='Click Me' icon="pi pi-check" ></Button>
          
          <Button label='Click Me' icon="pi pi-check" iconPos='right'></Button>

        </div>
      </header>
    </div>
  );
}

export default App;
