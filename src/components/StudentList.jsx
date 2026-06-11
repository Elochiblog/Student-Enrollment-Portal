import StudentCard from "./StudentCard";

const StudentList = ({
  students,
  title = "All Students",
  children,
  getGrade,
}) => {
  return (
    <section>
      <h2>{title}</h2>

      {students.length === 0 ? (
        <p>No students to display yet</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              getGrade={getGrade}
            />
          ))}
        </div>
      )}

      {children}
    </section>
  );
};

export default StudentList;
