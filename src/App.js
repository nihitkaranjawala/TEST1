import { useState } from "react";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import FacultyDashboard from "./components/FacultyDashboard";

function App() {
  const [role, setRole] = useState("");
  const [documents, setDocuments] = useState([]);

  if (role === "") {
    return <Login setRole={setRole} />;
  }

  if (role === "admin") {
    return <AdminDashboard documents={documents} />;
  }

  return (
    <FacultyDashboard
      documents={documents}
      setDocuments={setDocuments}
    />
  );
}

export default App;
