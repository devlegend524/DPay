// @flow
import React, { useState, useEffect, useCallback } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import NFTStorageService from "@/services/nftStorage";
import Spinner from "./spinner";

const AttachFileComponent = ({
  type,
  setInscriptionText,
  fileName,
  setFileName,
}) => {
  const [loading, setLoading] = useState(false);

  const [types, setTypes] = useState({
    "audio/mpeg": [".mp3"],
    "audio/ogg": [".ogg"],
  });
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    setLoading(true);
    try {
      const client = new NFTStorageService();
      console.log(acceptedFiles.length);
      const cid = await client.storeToken(acceptedFiles);
      console.log(cid);
      setFileName(acceptedFiles[0].name);
      setInscriptionText(cid);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: types,
    maxFiles: 1,
  });

  useEffect(() => {
    if (type === "audio") {
      setTypes({
        "audio/mpeg": [".mp3"],
        "audio/ogg": [".ogg"],
      });
    } else if (type === "image") {
      setTypes({
        "image/jpeg": [],
        "image/png": [],
        "image/webp": [],
      });
    } else {
      setTypes({
        "image/jpeg": [],
        "image/png": [],
        "image/webp": [],
      });
    }
  }, [type]);

  return loading ? (
    <div className="w-full min-h-[150px] flex justify-center items-center border  rounded-md">
      <Spinner />
    </div>
  ) : (
    <>
      <label>{fileName ? fileName : "Upload file to inscribe"} </label>
      <div
        {...getRootProps()}
        className="w-full min-h-[150px] flex justify-center items-center border  rounded-md"
      >
        <input {...getInputProps()} />
        <p className="p-3">{`Attach ${type}`}</p>
      </div>
    </>
  );
};
export default AttachFileComponent;
