import RodxButton from "../src/button.vue";
import { mount } from "@vue/test-utils";

describe('rod-butoon',()=>{
    test('button-text',()=>{
        const wrapper = mount(RodxButton)
        expect(wrapper.html()).toContain('button')
    })
})
