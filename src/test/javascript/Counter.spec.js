import { mount } from '@vue/test-utils'
import Counter from '../../componets/counter.vue'


describe('Counter.vue', () => {
    it('increments counter', () => {
        const wrapper = mount(Counter);

        expect(wrapper.vm.count).toBe(0);

        wrapper.find('[jest="increment-button"]').trigger('click')

        expect(wrapper.vm.count).toBe(1);
    })
})