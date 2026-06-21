import { useState, useRef } from "react";
import Button from "./Button";

const EnrollForm = ({ tracks, onEnroll }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [track, setTrack] = useState(tracks[0]);
  const [score, setScore] = useState("");
  const [errors, setErrors] = useState({});
  const emailRef = useRef();
  const activeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const isActive = activeRef.current.checked;
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (score === "" || Number(score) < 0 || Number(score) > 100) {
      newErrors.score = "Score must be between 0 and 100";
    }

    if (!email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length) return;

    const student = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      track,
      score: Number(score),
      isActive,
      avatar: "https://i.pravatar.cc/150",
    };

    onEnroll(student);
    setErrors({});

    setFirstName("");
    setLastName("");
    setTrack(tracks[0]);
    setScore("");

    emailRef.current.value = "";
    activeRef.current.checked = false;
  };

  const isFormInvalid =
    !firstName.trim() ||
    !lastName.trim() ||
    score === "" ||
    Number(score) < 0 ||
    Number(score) > 100;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enroll New Student</h2>

      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <select value={track} onChange={(e) => setTrack(e.target.value)}>
        {tracks.map((track) => (
          <option key={track}>{track}</option>
        ))}
      </select>

      <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      {errors.score && <p className="error">{errors.score}</p>}

      <input ref={emailRef} defaultValue="" placeholder="Email" />
      {errors.email && <p className="error">{errors.email}</p>}

      <div className="checkbox-group">
        <input type="checkbox" ref={activeRef} id="active" />

        <label htmlFor="active">Active Student</label>
      </div>

      <p>
        Preview: {firstName} {lastName} — {track} ({score})
      </p>

      <Button title="Enroll" className="enroll-btn" disabled={isFormInvalid} />
    </form>
  );
};

export default EnrollForm;
