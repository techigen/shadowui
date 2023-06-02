import { Component, Prop, Listen, h, Event } from '@stencil/core';
import { componentClassPrefix } from '../../common';

@Component({
  tag: 'shadow-button',
  styleUrls: {
    default: './style/default.scss',
    primary: './style/primary.scss',
  },
  shadow: true,
})
export class ShadowButton {
  /**
   * button mode
   * options: default | primary
   */
  @Prop() type: string;
  /**
   * button inner text
   */
  @Prop() text: string;
  /**
   * button "disablity", when it is disabled, you can now click it
   */
  @Prop() disabled: string;

  @Event({
    eventName: 'onClickk',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  clickEvent: any;

  @Listen('onClickk')
  todoCompletedHandler(event: any) {
    console.log('Received the custom todoCompleted event: ', event);
  }

  componentDidLoad() {
    console.log(this, 'this');
  }

  render() {
    return (
      <button
        class={`radius-[4px] ${componentClassPrefix('button', {
          [`button-${this.type}`]: true,
          disabled: !!this.disabled,
        })}`}
      >
        {/* <slot></slot> */}
        <span>{this.text}</span>
      </button>
    );
  }
}
