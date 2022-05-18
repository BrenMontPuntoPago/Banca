import React, { Fragment } from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";

import { Form, Button } from "react-bootstrap";

export function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre y apellido" className="email" {...register("email", { required: true })} />
          {errors.email && <Form.Text className="error">Campo requerido</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingrese un correo valido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su correo electrónico" className="email" {...register("email", { required: true })} />
          {errors.email && <Form.Text className="error">Campo requerido</Form.Text>}
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ingrese una contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese una contraseña" className="email" {...register("password", { required: true })} />
          {errors.password && <Form.Text className="error">Campo requerido</Form.Text>}
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirme la contraseña" className="email" {...register("password", { required: true })} />
          {errors.password && <Form.Text className="error">Campo requerido</Form.Text>}

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Autorizo el tratamiento de mis datos" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className="btn-send">
            <div>
              <img className="inicio-sesion" src="/img/iniciar-sesion.png" alt="" />
            </div>
            Enviar
          </Button>
        </div>

      </Form>
    </Fragment>

  );
}
