import './App.css';
function StudentCard({ student, increaseSolved }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>

      <p>
        Questions Solved:
        <strong> {student.solved}</strong>
      </p>

      <button
        onClick={() =>
          increaseSolved(student.id)
        }
      >
       ADD ONE
      </button>
    </div>
  );
}

export default StudentCard;