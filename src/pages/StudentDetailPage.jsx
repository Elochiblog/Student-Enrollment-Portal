import { useParams, Link } from "react-router-dom";

const StudentDetailPage = ({ students, getGrade }) => {
  const { id } = useParams();
  const student = students.find((student) => student.id === id);

  if (!student) {
    return (
      <div>
        <h2>Student not found</h2>
        <Link to="/">Back Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <img src={student.avatar} alt={student.firstName} />

      <h2>
        {student.firstName} {student.lastName}
      </h2>

      <p>Email: {student.email}</p>
      <p>Track: {student.track}</p>
      <p>Score: {student.score}</p>
      <p>Grade: {getGrade(student.score)}</p>
      <p>Status: {student.isActive ? "Active" : "Inactive"}</p>

      <Link to="/">Back to Roster</Link>
    </div>
  );
};

export default StudentDetailPage;
