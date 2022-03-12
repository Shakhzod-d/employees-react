import "./app-info.css";

const AppInfo = ({ employees, increase }) => {
  return (
    <div className="app-info">
      <h1>All employers in our company</h1>
      <h2>Number of employers {employees}</h2>
      <h3>Promotion {increase}</h3>
    </div>
  );
};

export default AppInfo;
