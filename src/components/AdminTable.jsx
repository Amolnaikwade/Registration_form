import { useState } from "react";
import "../styles/AdminTable.css";

export default function AdminTable({ title, data, setData, fields }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  const [editForm, setEditForm] = useState({});

  const itemsPerPage = 5;

  const filteredData = data
    .filter((item) =>
      fields.some((key) =>
        item[key]?.toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      const x = a[sortField].toLowerCase();
      const y = b[sortField].toLowerCase();
      return sortAsc ? x.localeCompare(y) : y.localeCompare(x);
    });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditForm(data[index]);
  };

  const handleEditSave = () => {
    const updated = [...data];
    updated[editIndex] = editForm;
    setData(updated);
    setEditIndex(null);
  };

  const handleSort = (field) => {
    setSortField(field);
    setSortAsc(sortField === field ? !sortAsc : true);
  };

  return (
    <div className="admin-table">
      <div className="admin-table-header">
        <h3>{title}</h3>
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            {fields.map((key, i) => (
              <th key={i} onClick={() => handleSort(key)}>
                {key.toUpperCase()} {sortField === key ? (sortAsc ? "▲" : "▼") : ""}
              </th>
            ))}
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              {fields.map((key, i) => (
                <td key={i}>{item[key]}</td>
              ))}
              <td>
                <button className="btn-edit" onClick={() => handleEditClick(index)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {currentData.length === 0 && (
            <tr>
              <td colSpan={fields.length + 1}>No records found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Edit Popup */}
      {editIndex !== null && (
        <div className="edit-popup">
          <div className="popup-box">
            <h3>Edit {title}</h3>

            {fields.map((key, i) => (
              <div key={i} className="popup-field">
                <label>{key.toUpperCase()}</label>
                <input
                  type="text"
                  value={editForm[key]}
                  onChange={(e) =>
                    setEditForm({ ...editForm, [key]: e.target.value })
                  }
                />
              </div>
            ))}

            <button className="btn-save" onClick={handleEditSave}>
              Save
            </button>
            <button className="btn-cancel" onClick={() => setEditIndex(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
