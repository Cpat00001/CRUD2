import React from 'react';
import { Row, Col} from 'antd';


export default function Bottom() {
    return (
        <div>
            <Col span={24} className='register3row1'>
                    <Col xs={2} sm={2} md={4} lg={4} xl={4}></Col>
                    <Col xs={20} sm={20} md={12} lg={12} xl={12} className='register3div1'>
                        <Row>
                            <Col span={24}>
                                <h5 className='register3text1'>Need Assistance?</h5>
                            </Col>
                            <Col span={24}>
                                <p className='register3text2'>
                                Any delicate you how kindness horrible outlived servants. 
                                You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will.
                                Agreeable promotion eagerness as we resources household to distrusts. Polite do object at passed it is.
                                Small for ask shade water manor think men begin
                                </p>
                            </Col>
                            <Col span={24}>
                            <h5 className='register3text1'>/company/ Contact Details</h5>
                            </Col>
                            <Col span={24}>
                            <p className='register3text3'><b>Telephone: 44(0) 222 333 8888</b></p>
                            </Col>
                            <Col span={24}>
                                <p className='register3text2'>(Monday - Friday 9am - 6pm (GMT))</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} sm={2} md={8} lg={8} xl={8}></Col>
                </Col>
                <Row>
                    <Col span={24} className='register4row1'></Col>
                </Row>
                <Row>
                    <Col span={24} className='register4row2'></Col>
                </Row>
        </div>
    )
}
