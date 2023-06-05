import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'shadow-button-demo',
  shadow: false,
})
export class ShadowButtonDemo {
  render() {
    return (
      <Fragment>
        <shadow-button
          type="primary"
          onClick={e => {
            console.log(e, '确认');
          }}
        >
          确认
        </shadow-button>
        <shadow-button
          onClick={e => {
            console.log(e, '取消');
          }}
        >
          取消
        </shadow-button>
        <shadow-button
          type="primary"
          onClick={e => {
            console.log(e, 'disabled确认');
          }}
          disabled={true}
        >
          disabled确认
        </shadow-button>
        <shadow-button
          onClick={e => {
            console.log(e, 'disabled取消');
          }}
          disabled={true}
        >
          disabled取消
        </shadow-button>
        <shadow-button
          onClick={e => {
            console.log(e, 'disabled取消');
          }}
          disabled={true}
          css={{
            backgroundColor: '#eee',
            borderRadius: '8px',
            padding: '8px',
          }}
        >
          自定义样式
        </shadow-button>
      </Fragment>
    );
  }
}
