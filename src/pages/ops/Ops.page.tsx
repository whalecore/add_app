import React from 'react'; 
import { observer } from 'mobx-react';

import { Container, Row, Col } from 'reactstrap';

import OpsIter from '../../components/ops-iter/OpsIter.component'

import { userStore } from '../../stores/userStore';
import { maskEmail } from '../../common/utils/maskEmail';

const OpsPage: React.FC = () => {
 return <Container>
     <Row>
         <Col className='d-sm-none d-md-block' lg="6">
            <span className='lead d-block'>Привет, {maskEmail(userStore.userData!.email!)}</span>
            Воспользуйся полями справа, чтобы произвести операцию сложения.
         </Col>
         <Col lg="6">
             <OpsIter />
         </Col>
     </Row>
 </Container>
}

export default observer(OpsPage);