import RodxButton from '../'

export default {
    title: 'RdoxButton',
    component: RodxButton
}

export const demo = () => ({
    template: `<rodx-button @click="clickit">点击按钮</rodx-button>`,
    methods: {
        clickit() {
            console.log('button2');
        }
    }

})