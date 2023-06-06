import { Component, Prop, Host, h } from '@stencil/core';
import { componentClassPrefix } from '../../../common';
import { shadowWaveDefaults } from './index.constants';

@Component({
  tag: 'shadow-wave',
  shadow: true,
})
export class ShadowWave {
  /**
   * button mode
   * options: default | primary
   */
  @Prop() type?: 'default' | 'primary' = shadowWaveDefaults.type;

  render() {
    return (
      <Host
        onMouseDown={() => {
          console.log('wave clicked');
        }}
        style={{ position: 'relative' }}
      >
        <div
          class={componentClassPrefix('wave', {
            [`wave-${this.type}`]: true,
          })}
          style={{ position: 'absolute' }}
        ></div>
        <slot />
      </Host>
    );
  }
}
