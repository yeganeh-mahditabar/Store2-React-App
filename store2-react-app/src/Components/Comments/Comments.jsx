import Errorbox from "../Errorbox/Errorbox";

export default function Comments() {

  return (
    <div className="cms-main">
      <Errorbox msg="هیچ کامنتی یافت نشد" />

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
            <td><button>دیدن متن</button></td>
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

    </div>
  );
}
