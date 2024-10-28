import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

import { Auth } from "@/api";
import { useAuth } from "@/hooks";

import { Input, Label, Button, Form } from "reactstrap";
import { toast } from "react-toastify";
import styles from "./LoginFormClient.module.scss";

const authCtrl = new Auth();

export function LoginFormClient() {
  const router = useRouter();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.access);
        router.push("/");
      } catch (error) {
        toast.error(error.message);
      }
    },
  });


  function handleClick() {
    router.push("/");
  }



  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className={styles.closed} onClick={handleClick}>
        <Label for="close">X</Label>
      </div>

      <div className={styles.LoginFormClient}>
        <div className={styles.loginContent}>
          <h4>Iniciar Sesión</h4>

          <div className={styles.input}>
            <Label for="title">Correo</Label>
            <Input
              name="email"
              type="email"
              placeholder=""
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
          </div>
          <div className={styles.input}>
            <Label for="password">Contraseña</Label>
            <Input
              type="password"
              name="password"
              placeholder=""
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
          </div>

          <Button block color="danger" type="submit">
            Continuar
          </Button>
          {/* <div className={styles.register}>
            <label>Crear una cuenta</label>
          </div> */}
        </div>
      </div>
    </Form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string()
      .email("No es un email valido!")
      .required("Este campo es obligatorio!"),
    password: Yup.string().required("Este campo es obligatorio!"),
  };
}
