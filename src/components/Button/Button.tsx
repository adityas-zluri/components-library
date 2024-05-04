import React from "react";

interface ButtonProps {
  label: string;
  style: object;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { label, onClick, style } = props;
  return (
    <>
      <button onClick={onClick} style={style}>
        {label}
      </button>
    </>
  );
}
