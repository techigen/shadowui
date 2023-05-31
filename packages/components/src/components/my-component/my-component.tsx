import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils';

@Component({
  tag: 'my-component',
  styleUrls: {
    default: 'my-component.pcss',
    motion: 'index.pcss',
  },
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    console.log(this);
    return (
      <div class="out bg-indigo-500 p-12 rounded-lg">
        <div class="test animate__animated animate__bounce text-white">Hello, World! I'm {this.getText()}</div>
      </div>
    );
  }
}
