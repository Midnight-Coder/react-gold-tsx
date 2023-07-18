import PrivateRoute from 'components/Common/PrivateRoute';
import ConnectionList from 'pages/Connections/ConnectionList';
import { Route, Routes } from 'react-router-dom';


export default function Router() {
  return (
    <Routes>
      <Route path='list' element={<PrivateRoute outlet={<ConnectionList />} />} />
    </Routes>
  );
}
