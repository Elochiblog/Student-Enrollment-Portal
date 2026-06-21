import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EnrollPage from "./pages/EnrollPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

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
    setStudents((prev) => [newStudent, ...prev]);
  };

  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              students={students}
              loading={loading}
              error={error}
              getAverage={getAverage}
              getGrade={getGrade}
              fetchStudents={fetchStudents}
            />
          }
        />

        <Route
          path="/enroll"
          element={<EnrollPage tracks={TRACKS} onEnroll={handleEnroll} />}
        />

        <Route
          path="/students/:id"
          element={
            <StudentDetailPage students={students} getGrade={getGrade} />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
