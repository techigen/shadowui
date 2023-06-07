import { Component, Prop, Host, h } from '@stencil/core';
import { componentClassPrefix } from '../../common';
import { shadowButtonDefaults } from './index.constants';

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
    if (!!this.disabled) {
      return;
    }
    this.onClick?.(e);
  };

  render() {
    return (
      <shadow-wave type={this.type} disabled={this.disabled}>
        <button
          class={componentClassPrefix('button', {
            [`button-${this.type}`]: true,
            disabled: !!this.disabled,
            md: true,
          })}
          onClick={this.clickHandler}
          style={this.css}
        >
          <slot />
        </button>
      </shadow-wave>
    );
  }
}
