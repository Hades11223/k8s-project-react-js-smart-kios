import React from "react";
import { Input, FormGroup, Label } from "reactstrap";
import "./style.scss";

const TextBox = (props) => {
  const {
    label,
    id,
    name,
    placeholder,
    required,
    type,
    readOnly,
    maxLength,
    styleInput,
  } = props;
  return (
    <FormGroup autoComplete="off" className="text-box-input">
      {label ? (
        <Label htmlFor="nf-name" className="nf-name">
          {label}
          {required ? <span className="isofh-error">*</span> : ""}
        </Label>
      ) : (
        ""
      )}
      <Input
        style={styleInput}
        className="input-name"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={props.value}
        autoComplete="off"
        onChange={props.onChangeValue}
        readOnly={readOnly ? true : false}
        maxLength={maxLength ? maxLength : 200}
      />
    </FormGroup>
  );
};
export { TextBox };