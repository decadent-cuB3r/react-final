import { useHistory } from "react-router-dom";
import { Button } from "antd"

export default function PreviousButton() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div className="previous-button">
      <img src="/images/上一頁.png" alt="No-Warnings" />
      <div className="ensp">回上頁</div>
    </div>
  );
}
