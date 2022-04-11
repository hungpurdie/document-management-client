import { Col, Row } from "antd";
import DocumentList from "components/DocumentList";
import React from "react";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    id: new Date().getTime() + i,
    title: `21/NQ-HĐĐH : Nghị quyết về việc công nhận Hiệu trưởng Trường Đại học Y - Dược, Đại học Huế nhiệm kỳ 2020 - 2025`,
    avatar: "Admin",
    textNumber: "21/NQ-HĐĐH",
    signer: "Nguyễn Vũ Quốc Huy",
    dateIssued: "2020-05-01",
    authorityIssuing: "Đại Học Huế",
    urgency: "Bình thường",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}
export default function ManageDocument() {
  const handleDeleteDocumentClick = (item) => {
    console.log(item);
  };

  const handleEditDocumentClick = (item) => {
    console.log(item);
  };

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <DocumentList
          dataRender={listData}
          type="admin"
          onEditDocument={handleEditDocumentClick}
          onDeleteDocument={handleDeleteDocumentClick}
        />
      </Col>
    </Row>
  );
}
