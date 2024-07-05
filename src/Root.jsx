import { Outlet } from 'react-router-dom';

// Components
import Header from "./components/header"

function Root() {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
