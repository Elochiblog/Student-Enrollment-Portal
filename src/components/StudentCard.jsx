import { Link } from "react-router-dom";
const StudentCard = ({ student, getGrade }) => {
  const { avatar, firstName, lastName, track, email, score, isActive } =
    student;

  return (
    <div className={isActive ? "student-card" : "student-card inactive"}>
      <img src={avatar} alt={`${firstName} ${lastName}`} />

      <h3>
        <Link to={`/students/${student.id}`}>
          {firstName} {lastName}
        </Link>
      </h3>

      <p>{track}</p>
      <p>{email}</p>
      <p>Score: {score}</p>
      <p>Grade: {getGrade(score)}</p>
      <p>{isActive ? "✅ Active" : "❌ Inactive"}</p>
    </div>
  );
};

export default StudentCard;
