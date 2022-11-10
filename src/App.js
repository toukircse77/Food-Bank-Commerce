
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div  className="App">
      <Toaster />
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
