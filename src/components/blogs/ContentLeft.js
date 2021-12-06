
import { FaEye } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { Card,Image, Col, Row,Pagination } from 'antd';

export default function ContentLeft(){
  const style_image = {
    width: '100%',
    height: '150px'
  }
    return(
        <Col span={17} >
            <Row >
              <Card className="card-blog">
                <Row >
                  <Col span={8} style={style_image}>
                    <Image
                      style={style_image}
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png  "
                    />
                  </Col>
                  <Col className="card-blog-right" span={16} style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h5 className="title-item">.Net la gi?</h5>
                      <span>
                      102 <FaEye color='rgb(6 170 233)'/>
                      </span>
                    </div>

                    <div>
                      Content to render in the top-right corner of the cardContent to render in the top-right corner of the cardContent to render in the top-right corner of the card
                    </div>
                    <div style={{fontSize:'13px' }}>
                   <i > <FiEdit2 />21/09/2021</i>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card className="card-blog">
                <Row>
                  <Col span={8} style={style_image}>
                    <Image
                      style={style_image}
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  </Col>
                  <Col span={16}  className="card-blog-right"style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h5 className="title-item">.Net la gi?</h5>
                      <span>
                        102 <FaEye color='rgb(6 170 233)'/>
                      </span>
                    </div>

                    <div>
                      Content to render in the top-right corner of the cardContent to render in the top-right corner of the cardContent to render in the top-right corner of the card
                    </div>
                    <div style={{fontSize:'13px' }}>
                    <i > <FiEdit2 />21/09/2021</i>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card className="card-blog">
                <Row >
                  <Col span={8} style={style_image}>
                    <Image
                      style={style_image}
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  </Col>
                  <Col span={16} className="card-blog-right" style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h5 className="title-item">.Net la gi?</h5>
                      <span>
                      102 <FaEye color='rgb(6 170 233)'/>
                      </span>
                    </div>

                    <div>
                      Content to render in the top-right corner of the cardContent to render in the top-right corner of the cardContent to render in the top-right corner of the card
                    </div>
                    <div style={{fontSize:'13px' }}>
                    <i > <FiEdit2 />21/09/2021</i>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Pagination className="paging"  defaultCurrent={1} total={50} responsive showSizeChanger/>
          </Col>
    )
}