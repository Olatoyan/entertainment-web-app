import { useForm } from "react-hook-form";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import MiniSpinner from "../../ui/MiniSpinner";

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  max-width: 44rem;
  width: 100%;
  padding: 2rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 31.25em) {
    gap: 4rem;
  }
`;

const Img = styled.img`
  width: 3.2rem;
  height: 2.56rem;
  align-self: center;
`;

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--semi-dark-blue);
  border-radius: 2rem;
  padding: 3.2rem;
  gap: 4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 300;
  caret-color: var(--red);
  padding-bottom: 1.7rem;
  padding-left: 1.6rem;
  border-bottom: 1px solid var(--greyish-blue);

  &::placeholder {
    opacity: 0.5;
  }

  &:focus,
  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

const Error = styled.span`
  color: var(--red);
  font-size: 1.3rem;
  font-weight: 300;
`;

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 1.4rem 3rem;
  border-radius: 0.6rem;
  background-color: var(--red);

  &:hover {
    background-color: #fff;

    color: var(--dark-blue);
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: center;

  font-size: 1.5rem;
  font-weight: 300;

  & span {
    color: var(--red);
  }
`;

function LoginForm() {
  const { login, isLoading } = useLogin();

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function onSubmit({ email, password }) {
    console.log(email, password);
    login(
      { email, password },
      {
        onSuccess: () => navigate("/all", { replace: true }),
      }
    );
  }

  return (
    <AppLayout>
      <Img src="logo.svg" alt="logo" />

      <FormLayout>
        <Heading as="h1">Login</Heading>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Input
              style={{
                borderBottomColor: errors?.email?.message ? "var(--red)" : "",
              }}
              type="email"
              disabled={isLoading}
              placeholder="Email address"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            <Error>{errors?.email?.message}</Error>
          </FormRow>

          <FormRow>
            <Input
              style={{
                borderBottomColor: errors?.password?.message
                  ? "var(--red)"
                  : "",
              }}
              type="password"
              disabled={isLoading}
              placeholder="Password (min 6 characters)"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <Error>{errors?.password?.message}</Error>
          </FormRow>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? <MiniSpinner /> : "Login to your account"}
          </Button>

          <Box>
            <p>Don’t have an account?</p>
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </Box>
        </Form>
      </FormLayout>
    </AppLayout>
  );
}

export default LoginForm;
