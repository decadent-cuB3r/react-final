import { useHistory } from "react-router-dom";


export default function PreviousButton() {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div onClick={goToPreviousPath} className="previous-button">
      <img className="ensp"src="/images/上一頁.png" alt="No-Warnings" />
      <div className="ensp">回上頁</div>
    </div>
  );
}
