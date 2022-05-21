import RodxLink from '../src/link.vue'

export default {
  title: 'RodxLink',
  component: RodxLink
}

export const Link = _ => ({
  components: { RodxLink },
  template: `
    <div>
      <rodx-link></rodx-link>
    </div>
  `
})