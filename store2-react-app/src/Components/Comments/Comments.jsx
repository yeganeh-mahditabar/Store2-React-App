import { useEffect, useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import { API_URL } from "../../configs";
import "./Comments.css";
import Modal from "../Modal/Modal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/comments`)
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }, []);

  const closeDetailsModal = () => setIsShowDetailsModal(false);

  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>

          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    onClick={() => {
                      setMainCommentBody(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button>حذف</button>
                  <button>ویرایش</button>
                  <button>پاسخ</button>
                  <button>تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد" />
      )}

      {isShowDetailsModal && (
        <Modal onHide={closeDetailsModal}>
          <p className="text-modal">{mainCommentBody}</p>
          <button className="text-modal-close-btn" onClick={closeDetailsModal}>
            بستن
          </button>
        </Modal>
      )}
    </div>
  );
}
