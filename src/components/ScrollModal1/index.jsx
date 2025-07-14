import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from "./style.module.css";
import { useState } from 'react';

export default function ScrollModal1({ modal, setModal }) {
  const [scale, setScale] = useState(100);

  // scaleの状態を変えるだけ
  function scaleChange(add) {
    setScale((prevScale) => {
      const newScale = add !== 0 ? (prevScale + add) : 100;
      if (newScale < 100) {
        return 100; // 最小100%
      }
      if (newScale > 200) {
        return 200; // 最大200%
      }
      return newScale;
    });
  }

  return (
    <Modal
      show={modal}
      onHide={() => {
        setModal(false);
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>普通にサイズ変更する場合</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mw-100">
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src="https://www.ktc.ac.jp/img/top/bairitsu2024.jpg"
            style={{
              width: `${scale}%`,
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-3">
          <Button
            onClick={() => scaleChange(-10)}
            disabled={scale <= 100}
          >
            縮小
          </Button>
          <Button
            onClick={() => scaleChange(0)}
          >
            100%
          </Button>
          <Button
            onClick={() => scaleChange(10)}
            disabled={scale >= 200}
          >
            拡大
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
