import React  from "react";
import {
  Button,
  Modal,
  Spin,
} from "antd";
import { useAnalysisSingle } from "./useAnalysisSingle";
export const AnalysisSingleModal = ()=>{
    const { handleModalClose, modalVisible, loading } =
    useAnalysisSingle();
    return (
       <Modal
        title="你的模态框标题"
        open={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        zIndex={1001}
      >
        {/* 使用 Spin 组件展示 loading 状态 */}
        <Spin spinning={loading}>
          111
          {/* 在这里添加模态框的内容 */}
          {/* <YourCustomForm /> */}
        </Spin>
      </Modal>
      )
}