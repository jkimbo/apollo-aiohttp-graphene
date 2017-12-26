import React, { Component } from 'react'
import {
  Container, Col, Row, Visible, Hidden
} from 'react-grid-system'

// import { Link } from 'office-ui-fabric-react/lib/Link'
// import { Icon } from 'office-ui-fabric-react/lib/Icon'
// import { Label as LabelMS } from 'office-ui-fabric-react/lib/Label'
// import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot'


import { Card, Icon, Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom' // eslint-disable-line


import _ from 'lodash'

import './styles.scss'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subnavVisible: false
    }
  }


  render() {

    const {
      subnavVisible
    } = this.state


    return (
      <div style={{ background: '#f8f8f8 !important', marginLeft: '0px !important', marginRight: '0px !important', maxWidth: '100vw' }}>
        <Row style={{ height: '50px', borderBottom: 'solid 1px', marginLeft: '0px !important', marginRight: '0px !important' }}>
          {/* <Col sm={1} style={{ paddingLeft: '0px !important' }}>

          </Col> */}
          <Hidden xs style={{ maxWidth: '50px !important' }}>
            <Button
              className='iconNavbar'
              icon='grid layout'
              onClick={()=> {this.setState({ subnavVisible: !subnavVisible })}}
              style={{ 'background': (subnavVisible ? '#f2f2f2' : 'none') }}
            />
          </Hidden>
          <Col sm={2} >
            <Hidden sm xs style={{ verticalAlign: 'middle' }}>
              <t style={{ paddingLeft: '0px', width: '120px', lineHeight: '50px', height: '50px' }}>
                <img src='http://loremlabs.co/graphics/LoremLabs_logo.png' width='100px' style={{ lineHeight: '50px', verticalAlign: 'middle' }} />
              </t>
            </Hidden>
          </Col>
          <Col sm={8} >
            <Hidden sm xs style={{ background: 'red', verticalAlign: 'middle' }}>
              {/* <LinkDOM className='linkNavbar' to={'/'}
                style={{ float: 'left' }}>
                Home
              </LinkDOM> */}
              {/* <LinkDOM className='linkNavbar' to={'/settings'}
                style={{ float: 'left' }}>
                Settings
              </LinkDOM> */}
              {/* <Link className='linkNavbar'
                onClick={()=> {}}>
                <Icon className='ms-Icon--gear' />&nbsp;&nbsp;Settings
              </Link> */}
            </Hidden>
          </Col>
          <Col sm={1} style={{ paddingRight: '0px', float: 'left' }}>
            <Hidden  style={{ verticalAlign: 'middle' }}>
              {/* <LinkDOM className='iconBurger iconNavRight' href='http://dev.office.com/fabric/components/link'>
                <Icon className='ms-Icon--collapse' />
              </LinkDOM> */}
            </Hidden>
          </Col>
        </Row>
        {subnavVisible ?
          <Row style={{ height: '95vh', maxheight: '95vh', overflowY: 'scroll', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', top: '50px', width: '100vw', zIndex: '9999', marginLeft: '0 !important' }}>
            {/* <Hidden sm xs style={{ verticalAlign: 'middle' }}> */}
            <Container style={{ marginTop: '1em', marginBottom: '1em', color: 'white' }}>

              {/* <Pivot style={{ textAlign: 'center !important' }}>
                <PivotItem className='darkBGPivot' linkText='Available Applications' style={{ color: 'white !important' }}> */}
              {/* <LabelMS> */}
                <Row style={{ margin: 'auto' }}>
                  {_.times(10, (n: Number) => {
                    return (<Col key={'col_app' + n} xs={12} sm={12} md={4} lg={2} xl={2} style={{ marginTop: '1em' }}>
                      <Card key={'card_app' + n}>
                        <Card.Content>
                          <Card.Header>
                            APP {n}
                          </Card.Header>
                          {/* <Card.Meta>
                            <span className='date'>
                              Joined in 2015
                            </span>
                          </Card.Meta> */}
                          {/* <Card.Description>
                            Matthew is a musician living in Nashville.
                          </Card.Description> */}
                        </Card.Content>
                        {/* <Card.Content extra>
                          <a>
                            <Icon name='user' />
                            22 Friends
                          </a>
                        </Card.Content> */}
                      </Card>
                    </Col>)
                  })}
                </Row>
                  {/* </LabelMS> */}

              <br/>
            </Container>
            {/* </Hidden> */}
          </Row>
          : null}
      </div>
    )
  }
}

export { Navbar }
