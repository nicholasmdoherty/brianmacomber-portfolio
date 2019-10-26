import React from "react";
import ReactContactForm from "react-mail-form";
import styled from "styled-components";

export default function EmailForm() {
  const Form = styled(ReactContactForm)`
    margin: auto;
    font-size: 14px;
    text-align: center;
    input,
    textarea {
      border-radius: 5px;
      box-shadow: 0px 0px 10px 1px #222;
      display: block;
      margin: 12px auto;
      width: 100%;
      border: 1px solid #212529;
      outline: 0;
      font-size: 16px;
    }
    input {
      padding: 12px 6px;
    }
    textarea {
      padding: 6px;
      height: 220px;
    }
    a {
      box-shadow: 0px 0px 10px 1px #222;
      display: block;
      margin: auto;
      width: 120px;
      height: 3em;
      line-height: 3em;
      color: #fff;
      background-color: #4d7ea8;
      font-weight: 900;
      border-radius: 5px;
      &:visited,
      &:hover,
      &:focus,
      &:active {
        color: #fff;
      }
      &:hover {
        opacity: 0.9;
      }
    }
  `;

  return (
    <div className="w-100">
      <Form
        to="notfolie@gmail.com"
        titlePlaceholder="Subject..."
        contentsPlaceholder="Message..."
        buttonText="SEND EMAIL"
        contentsRows={30}
        contentsMaxLength={2500}
      />
    </div>
  );
}
