import { mount } from '@vue/test-utils'
import Counter from '../../src/components/counter.vue'

describe('counter.vue', () => {
  it('increments counter', () => {
    const wrapper = mount(Counter, {
      props: {
        info: ['info']
      }
    });

    expect(wrapper.vm.count).toBe(0);

    wrapper.find('[jest="increment-button"]').trigger('click')

    expect(wrapper.vm.count).toBe(1);
  })
})

describe('counter.vue', () => {
  it('decrements counter', () => {
    const wrapper = mount(Counter, {
      props: {
        info: ['info']
      }
    });

    expect(wrapper.vm.count).toBe(0);

    wrapper.find('[jest="decrement-button"]').trigger('click')

    expect(wrapper.vm.count).toBe(-1);
  })
})
