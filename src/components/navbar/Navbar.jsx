import user from '../../img/user.png';
import { menuItems } from '../../utils/menuItems';
import { logout } from '../../utils/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ active, setActive }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here, such as clearing user session data
    // Redirect to the login page
    navigate('/');
  };
  return (
    <>
      <div className="flex flex-col container bg-indigo-300 min-h-full rounded-xl w-80 p-4">
        <div className="flex mt-2">
          <img className="w-20 h-20" src={user} alt="" />
          <div className="ml-4 mt-4">
            <h2 className="font-bold">Dhruvi</h2>
            <p>Your Money</p>
          </div>
        </div>

        <ul className="mt-12 font-semibold">
          {menuItems.map((item) => {
            return (
              <li
                className={`p-2 ${active === item.id ? 'border-l-4 border-black rounded-xl bg-indigo-400' : ''}`}
                key={item.id}
                onClick={() => setActive(item.id)}
              >
                {item.icon} <span className="ml-2">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-80 font-semibold cursor-pointer" onClick={handleLogout}>
          {logout} Logout
        </div>
      </div>
    </>
  );
}

export default Navbar;
