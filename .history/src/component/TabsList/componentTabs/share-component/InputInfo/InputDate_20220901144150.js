import { Button, Modal, Input } from "antd";
import { useState } from "react";
import { Calendar } from "react-calendar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";
import "./StyleInput.css";

const InputDate = ({ valueText, allowClear, placeHolder }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [SelectedDate, setSelectedDate] = useState(null);
  const [ValueDate, setValueDate] = useState(null);
  const date = new Date(SelectedDate);

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
      <div className="flex justify-start InputStyle inputInside">
        <CalendarMonthIcon className="-ml-2" />
        {valueText !== "" ? (
          <Input
            bordered={false}
            className="!text-[14px] !text-white !text-[] !bg-transparent "
            style={{ color: "#4a20aa !important", fontSize: "14px !important" }}
            allowClear={false}
            value={
              date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
            }
            onClick={showModal}
          />
        ) : (
          <Input
            bordered={false}
            className="!text-[14px] !text-white !text-[] !bg-transparent "
            style={{ color: "#4a20aa !important", fontSize: "14px !important" }}
            allowClear={true}
            value={valueText}
            onClick={showModal}
            placeholder="Mon retour"
          />
        )}
      </div>
      <Modal
        title="Mon départ :"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={700}
        footer={[
          <Button className="btnAnnule" key="back" onClick={handleCancel}>
            Annuler
          </Button>,
          <Button
            className="btnConfirme"
            loading={confirmLoading}
            key="submit"
            onClick={handleOk}
          >
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

export default InputDate;
