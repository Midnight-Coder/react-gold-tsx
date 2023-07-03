import ConnectionList from 'pages/Connections/ConnectionList';
import { Route, Routes } from 'react-router-dom';


export default function Router() {
  return (
    <Routes>
      <Route path='list' element={<ConnectionList />} />
    </Routes>
  );
}
