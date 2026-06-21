import Header from "../components/Header";
import StudentList from "../components/StudentList";
import StatusMessage from "../components/StatusMessage";
import ClassButton from "../components/ClassButton";

const HomePage = ({
  students,
  loading,
  error,
  getAverage,
  getGrade,
  fetchStudents,
}) => {
  return (
    <div>
      <Header
        title="KodeCamp 6.0 — Enrollment Portal"
        studentCount={students.length}
        averageScore={getAverage(students)}
      />

      <ClassButton
        title="Refresh Roster"
        onClick={fetchStudents}
        className="refresh-btn"
      />

      {loading ? (
        <StatusMessage type="loading" />
      ) : error ? (
        <StatusMessage type="error" />
      ) : (
        <StudentList
          title="Student Roster"
          students={students}
          getGrade={getGrade}
        >
          <p className="roster-footer">
            End of roster —{students.length} total students
          </p>
        </StudentList>
      )}
    </div>
  );
};

export default HomePage;
