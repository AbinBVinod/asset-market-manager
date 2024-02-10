"use client";
import "./Assets.css"
import React from "react";
import Link from "next/link";

const Assets = () => {
  return (
    <div className="assets-container">
      <div className="main-data">
        <h1>Assets-Manager</h1>
      </div>
      <div className="read-write-data-container">
        <Link href={"/read"}>
          <button>Read</button>
        </Link>
        <Link href={"/write"}>
          <button>Write</button>
        </Link>
      </div>
    </div>
  );
};
export default Assets;
