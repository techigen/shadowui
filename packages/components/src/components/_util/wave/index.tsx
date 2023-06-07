import { Component, Prop, Host, Element, h, State } from '@stencil/core';
import { componentClassPrefix } from '../../../common';
import { shadowWaveDefaults } from './index.constants';

@Component({
  tag: 'shadow-wave',
  styleUrl: './style/index.scss',
  shadow: true,
})
export class ShadowWave {
  @Prop() type?: 'default' | 'primary' = shadowWaveDefaults.type;
  @Prop() disabled?: string | boolean = shadowWaveDefaults.disabled;
  @Prop() css?: Record<string, string>;
  @Element() el: HTMLElement;

  componentDidLoad() {
    console.log(this.el, this.el.getBoundingClientRect().height);
    // 这个时候
  }

  mouseDownHandler = () => {
    console.log('wave mouse down');
  };

  mouseUpHandler = () => {
    console.log('wave mouse up');
  };

  render() {
    return (
      <Host
        onMouseDown={this.mouseDownHandler}
        onMouseUp={this.mouseUpHandler}
        style={{
          display: 'inline-block',
          position: 'relative',
          ...this.css,
        }}
      >
        <div
          class={componentClassPrefix('wave', {
            [`wave-${this.type}`]: true,
          })}
        ></div>
        <slot />
      </Host>
    );
  }
}
