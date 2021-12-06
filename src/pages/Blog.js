
import React from 'react';
import Filter from '../components/blogs/Filter'
import ContentLeft from '../components/blogs/ContentLeft'
import ContentRight from '../components/blogs/ContentRight'
import '../css/Blog.css';
import { Layout, Divider, Row} from 'antd';
const { Content } = Layout;


function Blog() {

 

  return (

    <Layout className="layout" >
      <Content>
        <Filter />
        <Divider></Divider>

        <Row className="content-blog" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          
          <ContentLeft/>
          <ContentRight/>
        </Row>


      </Content>
    </Layout>


  );
}

export default Blog;

