import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import EnrollForm from "./components/EnrollForm";
import StudentList from "./components/StudentList";
import StatusMessage from "./components/StatusMessage";
import ClassButton from "./components/ClassButton";

const TRACKS = ["Frontend", "Backend", "Mobile", "Data"];

const SEED_STUDENTS = [
  {
    id: "seed-1",
    firstName: "Amara",
    lastName: "Johnson",
    email: "amara@kodecamp.dev",
    track: "Frontend",
    score: 92,
    isActive: true,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "seed-2",
    firstName: "Chidi",
    lastName: "Okafor",
    email: "chidi@kodecamp.dev",
    track: "Backend",
    score: 67,
    isActive: false,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getGrade = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  };

  const getAverage = (list) => {
    if (!list.length) return 0;

    const total = list.reduce((sum, student) => sum + Number(student.score), 0);

    return total / list.length;
  };

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://randomuser.me/api/?results=6&nat=us,gb"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();

      const apiStudents = data.results.map((user, index) => ({
        id: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        avatar: user.picture.thumbnail,
        track: TRACKS[index % TRACKS.length],
        score: Math.floor(Math.random() * 61) + 40,
        isActive: true,
      }));

      setStudents([...SEED_STUDENTS, ...apiStudents]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleEnroll = (newStudent) => {
    setStudents((prevStudents) => [newStudent, ...prevStudents]);
  };

  return (
    <div className="app-container">
      <Header
        title="KodeCamp 6.0 — Enrollment Portal"
        studentCount={students.length}
        averageScore={getAverage(students)}
      />

      <EnrollForm tracks={TRACKS} onEnroll={handleEnroll} />

      <div className="actions">
        <ClassButton
          title="Refresh Roster"
          onClick={fetchStudents}
          className="refresh-btn"
        />
      </div>

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
            End of roster — {students.length} total
          </p>
        </StudentList>
      )}
    </div>
  );
};

export default App;
