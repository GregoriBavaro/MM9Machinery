// import { useRef, useState } from "react";

// function handleFile(files) {
//   alert("Number of files: " + files.length);
// }

// // drag drop file component
// function DragDropFile() {
//   // drag state
//   const [dragActive, setDragActive] = useState(false);
//   // ref
//   const inputRef = useRef(null);

//   // handle drag events
//   const handleDrag = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   // triggers when file is dropped
//   const handleDrop = function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFile(e.dataTransfer.files);
//       console.log(e.dataTransfer.files)
//     }
//   };

//   // triggers when file is selected with click
//   const handleChange = function (e) {
//     e.preventDefault();
//     if (e.target.files && e.target.files[0]) {
//       handleFile(e.target.files);
//       console.log(e.target.files)
//     }
//   };

//   // triggers the input when the button is clicked
//   const onButtonClick = () => {
//     inputRef.current.click();
//     console.log(inputRef.current.value)
//   };

//   const sendPhotos = async () => {
//     try {
//       const response = await fetch("https://localhost:7058/api/File/upload", {
//         method: "POST",
//         headers: new Headers({
//           AuthHeader: "123",
//         }),
//         body: formData,
//       });
      

//       if (!response.ok) {
//         throw new Error("Not happening buddy");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     <form
//       id="form-file-upload"
//       onDragEnter={handleDrag}
//       onSubmit={(e) => e.preventDefault()}
//     >
//       <input
//         ref={inputRef}
//         type="file"
//         id="input-file-upload"
//         multiple={true}
//         onChange={handleChange}
//       />
//       <label
//         id="label-file-upload"
//         htmlFor="input-file-upload"
//         className={dragActive ? "drag-active" : ""}
//       >
//         <div>
//           <p>Drag and drop your file here or</p>
//           <button className="upload-button" onClick={onButtonClick}>
//             Upload a file
//           </button>
//         </div>
//       </label>
//       {dragActive && (
//         <div
//           id="drag-file-element"
//           onDragEnter={handleDrag}
//           onDragLeave={handleDrag}
//           onDragOver={handleDrag}
//           onDrop={handleDrop}
//         ></div>
//       )}
//     </form>
//   );
// }

// export default DragDropFile;
