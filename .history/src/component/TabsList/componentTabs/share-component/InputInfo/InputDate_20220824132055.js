import { Button, Modal } from "antd";
import { useState } from "react";
import { Calendar } from "react-calendar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./StyleInput.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [SelectedDate, setSelectedDate] = useState(null);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div id="inputDate">
      <Button
        className="InputStyle inputInside !text-left "
        onClick={showModal}
      >
        <CalendarMonthIcon className="mr-3 mb-1" /> 15/08/2022
      </Button>
      <Modal
        title="Mon départ :"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="!rounded-[15px]"
        footer={[
          <Button className="btnAnnule" key="back" onClick={handleCancel}>
            Annuler
          </Button>,
          <Button className="btnConfirme" key="submit" onClick={handleOk}>
            Confirmer
          </Button>,
        ]}
      >
        <div className="flex flex-row ">
          <Calendar
            onChange={(value) => setSelectedDate(value)}
            minDate={new Date()}
            defaultView="month"
            locale="fr"
            showDoubleView={false}
            next2Label={false}
            prev2Label={false}
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;
