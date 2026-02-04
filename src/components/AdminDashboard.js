function AdminDashboard({ documents }) {
  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Uploaded Documents</h3>

      {documents.length === 0 ? (
        <p>No documents uploaded yet.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Type</th>
              <th>File Name</th>
              <th>Uploaded By</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index}>
                <td>{doc.type}</td>
                <td>{doc.name}</td>
                <td>{doc.uploadedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;
