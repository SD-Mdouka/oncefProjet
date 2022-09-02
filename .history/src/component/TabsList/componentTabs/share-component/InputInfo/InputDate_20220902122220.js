import { Button, Modal, Input } from "antd";
import { useState } from "react";
import { Radio } from "antd";
import { Calendar } from "react-calendar";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./StyleInput.css";

const InputDate = ({ valueText, allowClear }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [SelectedDate, setSelectedDate] = useState(null);

  const date = new Date(SelectedDate);
  const ValueDate =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    console.log(ValueDate + "-");
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <div id="inputDate">
      <div className="flex justify-start InputStyle inputInside">
        <CalendarMonthIcon className="-ml-2" />
        <Input
          bordered={false}
          className="!text-[14px] !text-white !text-[] !bg-transparent "
          style={{ color: "#4a20aa !important", fontSize: "14px !important" }}
          allowClear={allowClear}
          defaultValue={valueText}
          onClick={showModal}
          placeholder="Mon retour"
          // value={ValueDate}
        />
      </div>
      <Modal
        title="Mon départ :"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={600}
        height={600}
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
        <div className="flex flex-row bg-[#fff]">
          <Calendar
            onClickDay={(value) => {
              setSelectedDate(value);
            }}
            minDate={new Date()}
            defaultView="month"
            locale="fr"
            showDoubleView={false}
            next2Label={false}
            prev2Label={false}
          />
        </div>
        <div className="bg-[#fff]">
          <Radio.Group className="p-1" onChange={onChange} defaultValue="a">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
      </Modal>
    </div>
  );
};

export default InputDate;
