import { Layout, Divider, Col, Row } from 'antd';
import { FilterItem } from './FilterItem'
import { Link, useRouteMatch } from 'react-router-dom';
const { Content } = Layout;

export default function Filter() {
    const style = {
        background: '#fff',
        padding: '6px 8px',
        boxShadow: 'rgb(241 48 48 / 15%) 0px 1px 10px',
        borderRadius: '60px',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '16px',
        marginBottom: '10px'
    };
    const match = useRouteMatch();
    console.log(match)
    return (
        <>

            <Divider orientation="left">Chủ đề</Divider>
            <Content className="content-blog-filter">
                <Row gutter={14} justify="center" style={{ width: '70%', margin: '0 auto', marginBottom: '10px' }}>
                    {FilterItem.map((item, index) => {
                        return (
                            <Col key={index} className="gutter-row" xs={4} >
                                <Menu matchParent={match.path} item={item} styleMenu={style} />

                            </Col>
                        )
                    })}
                </Row>

            </Content>
        </>
    );
}
function Menu({ item,matchParent,styleMenu }) {
    const match = useRouteMatch({
      path: matchParent+item.path
    });
    return <>
      <Link to={matchParent+item.path} >
           <div  className={match ? 'active' : ''} style={styleMenu}>{item.title}</div>
      </Link>
    </>
  
  }