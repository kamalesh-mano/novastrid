import { TaskStoreProvider } from './store';
import TaskManager from './taskManager';

function App() {
  return (
    <div className="App">
      <TaskStoreProvider >
      <TaskManager /></TaskStoreProvider>
    </div>
  );
}

export default App;
