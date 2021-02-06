import React from 'react';
import {Button, Divider, Layout} from 'antd';
import {red} from '@ant-design/colors';
import { Footer } from 'antd/lib/layout/layout';


const Section = ({headline, content, url}) => {
    return (
        <Layout className='flex-container' style={container_style}>
            <Divider orientation='left' style={divider_style} type='horizontal'>{headline}</Divider>
            <p style={paragraph_style}>{content}</p>
            <Footer style={footer_style}>
                <Button style={button_style} href={url}>Try</Button>
            </Footer>
        </Layout>
    );
}

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

console.log(`WIDTH: ${WIDTH}\nHEIGHT: ${HEIGHT}`);

const container_style ={
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
}

const footer_style ={
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    paddingRight: 0.10 * WIDTH
}

const button_style ={
//    display: 'flex',
    //left: WIDTH - 0.40 * WIDTH,
    width: 0.07 * WIDTH
}

const paragraph_style ={
    textAlign: 'left',
    paddingLeft: 0.10 * WIDTH
}

const divider_style = {
    backgroundColor: red,
    marginLeft : "20px",
    marginRight: "20px",
}
export default Section;