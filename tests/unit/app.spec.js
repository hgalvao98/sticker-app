import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'

jest.mock('../../src/components/pix.vue', () => {
    const MockTest = "hello"

    return MockTest

})

describe('App.vue', () => {
    it('increments page number', () => {
        const wrapper = shallowMount(App);

        expect(wrapper.vm.activePhase).toBe(1)

        wrapper.find('[jest="next-button"]').trigger('click')

        expect(wrapper.vm.activePhase).toBe(2)

        wrapper.find('[jest="next-button"]').trigger('click')

        wrapper.find('[jest="next-button"]').trigger('click')

        expect(wrapper.vm.activePhase).toBe(1)
    })
});



