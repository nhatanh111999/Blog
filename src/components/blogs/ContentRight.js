
import { Card, Col } from 'antd';

export default function ContentRight() {

  return (
    <Col span={7} >
      <Card className="card-other-blog">
        <div className="title">
          <span className="span-title">
            Moi nhat
          </span>
        </div>
        <div className="list-blog">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </div>
       
      </Card>
      <br /> <br />
      <Card className="card-other-blog">
        <div className="title">
          <span className="span-title">
            Xem nhieu nhat
          </span>
        </div>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Col>
  )
}