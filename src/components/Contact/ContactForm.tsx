import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import {
  FormInput,
  FormLabel,
  FormTextarea,
  Form,
  FormErrors,
  LabelInputGroup,
  SubmittedMsg,
  FormBtn,
  //   SubmittedMsg,
} from "../../styles/styles-Contact/styles-ContactForm";
import { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
}

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedMsg, setSubmittedMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const url = "https://formspree.io/f/xgejwnwn";
  const onSubmit = (data: FieldValues) => {
    axios
      .post(url, data)
      .then((res) => {
        if (res.status === 200) {
          setSubmittedMsg(
            "Thank you, the form has successfully been submitted."
          );
          setIsSubmitted(true);
        }
      })
      .catch(() => {
        setSubmittedMsg(
          "An error occurred while submitting the form. Please try again later."
        );
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LabelInputGroup>
        <FormLabel htmlFor="first-name">First Name</FormLabel>
        <FormInput
          {...register("firstName", {
            required: true,
            minLength: 3,
            maxLength: 18,
          })}
          id="first-name"
          type="text"
          name="firstName"
        />
        {errors.firstName?.type === "required" && (
          <FormErrors>The name field is required.</FormErrors>
        )}
        {errors.firstName?.type === "minLength" && (
          <FormErrors>Minimum of 3 characters.</FormErrors>
        )}
        {errors.firstName?.type === "maxLength" && (
          <FormErrors>Maximum of 18 characters.</FormErrors>
        )}
      </LabelInputGroup>

      <LabelInputGroup>
        <FormLabel htmlFor="last-name">Last Name</FormLabel>
        <FormInput
          {...register("lastName", {
            maxLength: 18,
          })}
          id="last-name"
          type="text"
          name="lastName"
        />

        {errors.lastName?.type === "maxLength" && (
          <FormErrors>Maximum of 18 characters.</FormErrors>
        )}
      </LabelInputGroup>

      <LabelInputGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          id="email"
          type="text"
          name="email"
        />
        {errors.email?.type === "required" && (
          <FormErrors>The email field is required.</FormErrors>
        )}
        {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
      </LabelInputGroup>

      <LabelInputGroup>
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <FormTextarea
          {...register("comment", { required: true, minLength: 3 })}
          id="comment"
          rows={6}
          cols={20}
          name="comment"
        ></FormTextarea>
        {errors.comment?.type === "required" && (
          <FormErrors>Comment field is required.</FormErrors>
        )}
        {errors.comment?.type === "minLength" && (
          <FormErrors>Minimum of 3 characters.</FormErrors>
        )}
      </LabelInputGroup>

      {isSubmitted ? null : (
        <FormBtn className="expand-Btn" type="submit">
          Send
        </FormBtn>
      )}

      {submittedMsg && <SubmittedMsg>{submittedMsg}</SubmittedMsg>}
    </Form>
  );
};
