const StudentCard = ({ student, getGrade }) => {
  const { avatar, firstName, lastName, track, email, score, isActive } =
    student;

  return (
    <div className={isActive ? "student-card" : "student-card inactive"}>
      <img src={avatar} alt={firstName} />

      <h3>
        {firstName} {lastName}
      </h3>

      <p>
        {track} · {email}
      </p>

      <p>
        Score: {score} (Grade: {getGrade(score)})
      </p>

      <p>{isActive ? "✅ Active" : "❌ Inactive"}</p>
    </div>
  );
};

export default StudentCard;
