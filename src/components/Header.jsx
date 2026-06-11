const Header = ({ title, studentCount, averageScore }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      <p>
        {studentCount} Students | Class Average:
        {averageScore.toFixed(1)}%
      </p>
    </header>
  );
};

export default Header;
