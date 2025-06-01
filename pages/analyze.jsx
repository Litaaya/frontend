// import { useState } from "react";
// import axios from "axios";

// export default function AnalyzePage() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async () => {
//     if (!file) return;
//     const formData = new FormData();
//     formData.append("file", file);
//     setLoading(true);
//     try {
//       const res = await axios.post("http://127.0.0.1:8000/analyze", formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Lỗi kết nối backend!");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Test Fashion Analysis</h1>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleUpload} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
//         Analyze
//       </button>

//       {loading && <p className="mt-4">Đang xử lý...</p>}

//       {result && (
//         <div className="mt-6 bg-gray-100 p-4 rounded">
//           <h2 className="text-xl font-semibold">Phân loại: {result.predicted_class}</h2>
//           <p className="mt-2">Đánh giá xu hướng: <b>{result.trend_score.assessment}</b></p>
//           <pre className="text-sm mt-2">{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }
