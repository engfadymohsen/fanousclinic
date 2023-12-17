import PrimaryBtn from "../../shared/PrimaryBtn";
import theme from "../../../theme/theme";
import TextField from "../../shared/TextField";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const formElement: HTMLFormElement = e.currentTarget as HTMLFormElement;

    // const nameInput: HTMLInputElement | null =
    //   formElement.querySelector("#contact-us-name");
    // const emailInput: HTMLInputElement | null =
    //   formElement.querySelector("#contact-us-email");
    // const subjectInput: HTMLInputElement | null = formElement.querySelector(
    //   "#contact-us-subject"
    // );
    // const messageInput: HTMLInputElement | null = formElement.querySelector(
    //   "#contact-us-message"
    // );

    // if (nameInput && emailInput && subjectInput && messageInput) {
    //   console.log(
    //     nameInput.value,
    //     emailInput.value,
    //     subjectInput.value,
    //     messageInput.value
    //   );
    // }
    emailjs
      .sendForm(
        "service_ftx6mnp",
        "template_180x6s9",
        form.current,
        "7hSMjJqxJwjW8GIdb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form
      ref={form}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <TextField placeholder="Name" id="contact-us-name" name="name" required />
      <TextField
        placeholder="Email"
        id="contact-us-email"
        name="email"
        required
      />
      <TextField
        placeholder="Subject"
        id="contact-us-subject"
        name="subject"
        required
      />
      <textarea
        placeholder="Message"
        id="contact-us-message"
        name="message"
        rows={5}
        required
        style={{
          padding: "1rem",
          boxSizing: "border-box",
          width: "100%",
          borderRadius: "10px",
          outline: "none",
          border: "none",
          marginBottom: "10px",
          fontFamily: "'Roboto'",
          resize: "none",
          fontSize: theme.body_font,
        }}
      />
      <PrimaryBtn content="Submit" type="submit" />
    </form>
  );
};

export default Form;
