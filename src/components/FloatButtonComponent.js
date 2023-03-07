import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { MessageOutlined } from "@ant-design/icons";
import { GoogleOutlined } from "@ant-design/icons";

export default function FloatButtonComponent() {
  return (
    <div>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          right: 20
        }}
        icon={<MessageOutlined />}
      >
        <FloatButton
          icon={<WhatsAppOutlined />}
          href="https://wa.me/5511968379408?text=Olá%20Patrick"
        />
        <FloatButton
          icon={<LinkedinOutlined />}
          href="https://www.linkedin.com/in/patrick-wesley-78b01a148"
        />
      </FloatButton.Group>
    </div>
  );
}
