import React from "react";

export default function MenuItem({ name, selected = false }) {
  return <p style={selected ? { backgroundColor: "#444" } : {}}>{name}</p>;
}
