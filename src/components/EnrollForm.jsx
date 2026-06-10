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

    if (!firstName.trim()) newErrors.firstName = "Required";

    if (!lastName.trim()) newErrors.lastName = "Required";

    if (score < 0 || score > 100) newErrors.score = "0-100 only";

    if (!email.includes("@")) newErrors.email = "Invalid email";

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

    setFirstName("");
    setLastName("");
    setTrack(tracks[0]);
    setScore("");

    emailRef.current.value = "";
    activeRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enroll New Student</h2>

      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

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

      <input ref={emailRef} defaultValue="" placeholder="Email" />

      <label>
        <input type="checkbox" ref={activeRef} />
        Active
      </label>

      <p>
        Preview:
        {firstName} {lastName}
        {" - "}
        {track}({score})
      </p>

      <Button title="Enroll" />
    </form>
  );
};

export default EnrollForm;
