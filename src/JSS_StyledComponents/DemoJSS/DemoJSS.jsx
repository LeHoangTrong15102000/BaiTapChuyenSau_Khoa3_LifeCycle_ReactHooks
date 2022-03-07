import React, { Component } from 'react'
import { Button } from '../Components/Button'
import { SmallButton } from '../Components/Button'
import { StyledLink } from '../Components/Link'





export default class DemoJSS extends Component {
  render() {
    return (
      <div>
          <Button className="button_styled">Hello Trọng</Button>
        
            <Button bgPrimary fontSize2X>Primary</Button>
            
            <Button fontWeight="500px">Xác nhận</Button>

            <SmallButton>Tomato Button</SmallButton>

            <StyledLink>Lê Hoàng Trọng</StyledLink>
      </div>
    )
  }
}
