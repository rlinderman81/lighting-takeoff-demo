const API_URL = import.meta.env.VITE_API_URL;

window.upload = async function () {
  const file = document.getElementById('fileInput').files[0];
  if (!file) {
    alert("Please select a file");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch(`${API_URL}/upload/`, {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById('output').textContent = "Error: " + err.message;
  }
}
