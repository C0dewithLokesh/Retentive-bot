import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const DocumentRequest = () => {
  const [fileNames, setFileNames] = useState<
    Array<{ fileName: string; fileSizeMB: number }>
  >([]);
  const [isHidden, setIsHidden] = useState(true);

  const handleFileChange = (event: any) => {
    const { files } = event.target;
    const fileName = files[0].name;
    const fileSize = files[0].size;

    const fileSizeMB = +(fileSize / 1048576).toFixed(2);

    setFileNames([...fileNames, { fileName, fileSizeMB }]);

    if (fileNames.length >= 0) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <div className="leave-form leave-page font-medium flex flex-col items-center gap-4 w-full">
      <p className="leave-page-heading">Document request</p>

      <div className="leave-date w-full flex flex-col items-start gap-[5px] pl-2">
        <label htmlFor="Date" className="w-full text-[13px]">
          Employee Email address
        </label>
        <input
          type="email"
          className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400"
        />
      </div>

      <div className="leave-reason w-full flex items-start flex-col gap-[5px] pl-2">
        <label htmlFor="leave-reason" className="w-full text-[13px]">
          Documents
        </label>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-upload"
          // onChange={handleFileChange}
          className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400 flex justify-between items-center"
        >
          <p>Select Document</p>
          <FaAngleDown />
        </label>
      </div>

      {isHidden ? null : (
        <div className="leave-date w-full flex flex-col items-start gap-[5px] pl-2">
          <label className="w-full text-[13px]">Selected Documents</label>
          {fileNames.map((fileName) => (
            <div
              key={fileName.fileName}
              className="w-full p-[10px] outline-gray-400 rounded-[5px] bg-white border-gray-400 flex items-center justify-between"
            >
              {fileName.fileName}
              <span>{fileName.fileSizeMB} MB</span>
            </div>
          ))}
        </div>
      )}

      <button className="form-btn py-[10px] bg-[#7c3aed] text-lg rounded-[50px] text-white w-[50%] mb-[10px]">
        Download
      </button>
    </div>
  );
};

export default DocumentRequest;
