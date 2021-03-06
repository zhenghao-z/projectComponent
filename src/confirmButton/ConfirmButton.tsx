import { Button, Modal } from 'antd';
import React, { Component, ReactNode } from 'react';
import IComponentProps from '../interfaces/IComponentProps';
import './ConfirmButton.less';

const classnames = require('classnames');

interface IConfirmButtonState {
  loading: boolean;
}
interface IConfirmButtonProps extends IComponentProps {
  /**
   * 确认成功后，触发的事件
   */
  onConfirm?: () => void;

  /**
   * 是否确认的方法，默认为弹窗并由用户选择。
   *
   * 自定义验证函数须返回 Promise<boolean>，为true时，表示确认
   */
  validate?: () => Promise<boolean>;

  /**
   * 显示的元素
   */
  getElement?: (loading: boolean) => ReactNode;

  /**
   * 按钮上的文字
   */
  text?: string;

  /**
   * 如果使用默认的弹窗验证方式，且需要自定义文字，可使用此属性
   */
  modalContent?: {
    /**
     * 弹窗标题
     */
    title: string;

    /**
     * 弹窗内容
     */
    content: string;
  };
}

/**
 * 确认按钮
 */
class ConfirmButton extends Component<IConfirmButtonProps, IConfirmButtonState> {
  constructor(props: IConfirmButtonProps) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  public render(): ReactNode {
    const { className, style } = this.props;
    const { loading } = this.state;
    return (
      <span
        className={classnames('ConfirmButton', className)}
        style={style}
        onClick={this.clickHandler}
      >
        {this.getChildren()}
      </span>
    );
  }

  private clickHandler = async () => {
    const { onConfirm } = this.props;
    let isConfirm = false;

    this.setState({ loading: true });
    isConfirm = await this.validate();
    this.setState({ loading: false });
    if (isConfirm && onConfirm) {
      onConfirm();
    }
  };

  private validate() {
    const { validate } = this.props;
    if (validate) {
      return validate();
    } else {
      return this.defaultValidate();
    }
  }

  private defaultValidate(): Promise<boolean> {
    return new Promise(resolve => {
      const { modalContent } = this.props;
      Modal.confirm({
        title: modalContent ? modalContent.title : '操作不可恢复',
        content: modalContent ? modalContent.content : '此操作不可恢复，请确认是否继续',
        onOk: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        },
      });
    });
  }

  private getChildren() {
    const { loading } = this.state;
    const { getElement, text } = this.props;
    if (getElement) {
      return getElement(loading);
    }
    return (
      <Button type="danger" ghost loading={loading}>
        {text || '删除'}
      </Button>
    );
  }
}

export default ConfirmButton;
