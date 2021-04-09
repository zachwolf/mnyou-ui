import styled from 'styled-components'

/**
 * Styled Components passes through `height` and `width`
 * as attributes 😑
 *
 * https://styled-components.com/docs/api#shouldforwardprop
 */

export default styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return !['height', 'width'].includes(prop) && defaultValidatorFn(prop)
  },
})``
