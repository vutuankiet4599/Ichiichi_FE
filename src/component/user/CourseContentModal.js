import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CourseImage from '../../assets/course.jpg';

const CourseContentModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    コースの内容
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-6 d-flex justify-content-center">
                            <div className="w-75">
                                <img src={CourseImage}
                                    className="object-fit-cover rounded"
                                    style={{
                                        height: '160px',
                                        width: '100%'
                                    }}
                                    alt="course"
                                />
                                <p className="text-center mt-4">スポーツテーマ</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <textarea className="w-100 border-0" style={{ outline: 'none', overflow: 'auto', height: '200px'}}>
                                パスワードを入力画面のボディー：
                                ー　ログインするためユーザ名とパスワードが必要
                                ー　新しいパスワードを入力するフィールド
                                ー　新しいパスワードをもう一度入力するフィールド
                                ー　リセットのボタンをクリックするログイン画面に遷移する
                                ー　バックのボタンをクリックするとぐホームページに遷移する
                            </textarea>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>キャンセル</Button>
                <Button variant="primary">オッケー</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CourseContentModal