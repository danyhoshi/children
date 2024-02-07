import React from "react";

export default function Father({ children, color }) {
  return (
    <div style={{ border: `solid 1px ${color}`, padding: "4rem" }}>
      {children}
    </div>
  );
}
