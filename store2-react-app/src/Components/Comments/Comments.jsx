import { useEffect, useState } from "react";
import Errorbox from "../Errorbox/Errorbox";
import { API_URL } from "../../configs";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/comments`)
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }, []);

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
            <tr>
              <td>مریم</td>
              <td>آیفون 13</td>
              <td>
                <button>دیدن متن</button>
              </td>
              <td>1403-11-11</td>
              <td>14:12</td>
              <td>
                <button>حذف</button>
                <button>ویرایش</button>
                <button>پاسخ</button>
                <button>تایید</button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ کامنتی یافت نشد" />
      )}
    </div>
  );
}
