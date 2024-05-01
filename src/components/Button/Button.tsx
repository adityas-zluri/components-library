import React from "react";

interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps) {
  const { label } = props;
  return (
    <>
      <button>{label}</button>
    </>
  );
}
