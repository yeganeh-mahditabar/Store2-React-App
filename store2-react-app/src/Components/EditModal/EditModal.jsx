import { AiOutlineDollarCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import "./EditModal.css";

export default function EditModal({ onClose, onSubmit }) {
  return (
    <Modal onClose={onClose}>
      <div className="modal-parent active">
        <form className="edit-modal-form">
          <h1>اطلاعات جدید را وارد نمایید</h1>

          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="آدرس جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="محبوبیت جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان فروش جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-proructs-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="تعداد رنگ بندی جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>

          <button className="edit-form-submit" onClick={onSubmit}>
            ثبت اطلاعات جدید
          </button>
        </form>
      </div>
    </Modal>
  );
}
