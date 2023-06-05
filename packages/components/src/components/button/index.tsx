import { Component, Prop, h } from '@stencil/core';
import { componentClassPrefix } from '../../common';
import { shadowButtonDefaults } from './index.contants';

@Component({
  tag: 'shadow-button',
  styleUrl: './style/index.scss',
  shadow: true,
})
export class ShadowButton {
  /**
   * button mode
   * options: default | primary
   */
  @Prop() type?: 'default' | 'primary' = shadowButtonDefaults.type;
  /**
   * button "disablity", when it is disabled, you can now click it
   */
  @Prop() disabled?: string | boolean = shadowButtonDefaults.disabled;
  /**
   * button's click event
   */
  @Prop() onClick?: (event: MouseEvent) => void;
  /**
   * style prop
   */
  @Prop() css?: Record<string, string>;

  /**
   *
   * @param e
   * @returns
   */
  clickHandler = (e: MouseEvent) => {
    const isDisabled = !!this.disabled;
    if (isDisabled) {
      return;
    }
    this.onClick?.(e);
  };

  render() {
    return (
      <button
        class={componentClassPrefix('button', {
          [`button-${this.type}`]: true,
          disabled: !!this.disabled,
        })}
        onClick={this.clickHandler}
        style={this.css}
      >
        <slot></slot>
      </button>
    );
  }
}
