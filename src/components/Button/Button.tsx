import React from "react";

interface ButtonProps {
  label: string;
  style: object;
  disabled: boolean;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { label, onClick, style, disabled } = props;
  return (
    <>
      <button onClick={onClick} style={style} disabled={disabled}>
        {label}
      </button>
    </>
  );
}
