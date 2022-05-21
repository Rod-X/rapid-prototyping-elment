import input from '../src/input.vue'
import {
    mount
} from "@vue/test-utils";

desctipt('rod-input', () => {

    test('input-text', () => {
        const wrapper = mount(input)
        expect(wrapper.html()).toContain('input typr="text"')
    })

    test('input-password',()=>{
        const wrapper = mount(input,{
            propsData:{
                type:'password'
            }
        })
        expect(wrapper.html()).toContain('input type="password')
    })
    
    test('input-value',()=>{
        const wrapper = mount(input,{
            propsData:{
                type:'password',
                value:'myInput'
            }
        })
        expect(wrapper.html()).toContain('myInput')
    })

    test('input-snapshot',()=>{
        const wrapper = mount(input,{
            type:'text',
            value:'myInput'
        })
        expect(wrapper.vm.$el).toMatchSnapshot()
    })
})