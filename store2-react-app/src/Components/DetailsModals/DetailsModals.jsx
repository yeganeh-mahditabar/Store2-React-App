import Modal from "../Modal/Modal";
import "./DetailsModals.css";

export default function DetailsModals({ onHide, mainProductInfos }) {
  return (
    <Modal onClose={onHide}>
      <div className="modal-parent active">
        <div className="details-modal">
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{mainProductInfos.popularity}</td>
                <td>{mainProductInfos.sale}</td>
                <td>{mainProductInfos.colors}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}
