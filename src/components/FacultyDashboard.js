function FacultyDashboard({ documents, setDocuments }) {
  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const newDoc = {
      type: type,
      name: file.name,
      uploadedBy: "Faculty",
    };

    setDocuments([...documents, newDoc]);
  };

  return (
    <div>
      <h2>Faculty Dashboard</h2>

      <h3>Upload Attendance</h3>
      <input type="file" onChange={(e) => handleUpload(e, "Attendance")} />

      <h3>Upload Notes</h3>
      <input type="file" onChange={(e) => handleUpload(e, "Notes")} />

      <h3>Upload Assignments</h3>
      <input type="file" onChange={(e) => handleUpload(e, "Assignments")} />
    </div>
  );
}

export default FacultyDashboard;
