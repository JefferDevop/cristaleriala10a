import React, { useState } from "react";
import {
  CardImg,
  CardSubtitle,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
} from "reactstrap";
import { useRouter } from "next/router";

import { CiUser } from "react-icons/ci";
import styles from "./BtnLink.module.scss";

export function BtnModal() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function handleClickAdmin() {
    router.push("https://cristaleriala10.conexion.bar/admin-dashboard/");
  }

  function handleClickClient() {
    router.push("/join/login/");
  }

  return (
    <div className={styles.btnlink}>
      <Button onClick={toggleModal}>
        <CiUser size={20} color='#dfc979' />
      </Button>

      <Modal className={styles.modal} isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>INGRESAR COMO:</ModalHeader>

        <ModalBody className={styles.modal__body}>
          <Button color="primary" onClick={handleClickAdmin}>
            ADMINISTRADOR
          </Button>{" "}
          <Button color="secondary" onClick={handleClickClient}>
            CLIENTE
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}
