
import { Link , useLocation } from "react-router-dom";
import './Breadcrumb.css'
const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);
  
    const breadcrumbItems = paths.map((path, index) => {
      const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
      const isLast = index === paths.length - 1;
  
      return isLast ? (
        <span key={routeTo}>{path.charAt(0).toUpperCase() + path.slice(1)}</span>
      ) : (
        <span key={routeTo}>
          <Link to={routeTo}>
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
          {' > '}
        </span>
      );
    });
  
    return (
      <nav className="breadcrumb-nav">
        <Link to="/">Home</Link> {paths.length > 0 && ' > '}
        {breadcrumbItems}
      </nav>
    );
  };
  
export default Breadcrumb;