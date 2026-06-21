import { useNavigate } from "react-router-dom";

import EnrollForm from "../components/EnrollForm";

const EnrollPage = ({ tracks, onEnroll }) => {
  const navigate = useNavigate();

  const handleSubmit = (student) => {
    onEnroll(student);

    navigate("/");
  };

  return (
    <div>
      <EnrollForm tracks={tracks} onEnroll={handleSubmit} />
    </div>
  );
};

export default EnrollPage;
