import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import FirstComponent from '../FirstComponent.vue'

describe('FirstComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(FirstComponent, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(FirstComponent)
    const header = wrapper.find('.firsthtmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe("10")
  })

})
