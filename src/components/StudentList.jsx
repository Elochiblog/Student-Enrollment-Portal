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
        students.map((student) => (
          <StudentCard key={student.id} student={student} getGrade={getGrade} />
        ))
      )}

      {children}
    </section>
  );
};

export default StudentList;
