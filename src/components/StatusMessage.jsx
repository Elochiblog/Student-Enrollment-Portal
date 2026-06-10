const StatusMessage = ({ type }) => {
  const messages = {
    loading: "Loading students...",
    error: "Failed to load students.",
  };

  return <p>{messages[type]}</p>;
};

export default StatusMessage;
