import React from 'react';
import {Layout, Image, Space, Input} from 'antd';
import iggy from './iggy.png'
import Title from 'antd/lib/skeleton/Title';

const {Search} = Input;

const Header = () => {
    return (
        <Layout style={container_style}>
            <div style={left_header_style}>
                <div style={image_style}>
                    <img 
                        src={iggy}
                        width={90}
                        height={110}
                    />
                </div>
                <div style={title_style}>
                    <h1 style={{marginBottom: -4}}>AMAZING DESIGN</h1>
                    <h4 style={{color: '#31A1BD'}}>MAXIMIZING POSSIBILITIES</h4>
                </div>
            </div>
            <div style={Right_header_style}>
                <h4 style={{color: '#9999AA', fontStyle: 'italic', opacity: 0.6}}>The First Example Text On Website </h4>
                <Search placeholder="Search Site" style={{ width: 170 }} />
            </div>
        </Layout>
    );
}

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const container_style ={
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
}

const title_style ={
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 0.07 * HEIGHT,
    paddingLeft: 0.001 * WIDTH
}

const left_header_style ={
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 0.225 * WIDTH,
    paddingRight: 0.12 * WIDTH
}

const Right_header_style ={
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: 0.07 * HEIGHT,
    paddingLeft: 0.12 * WIDTH
}
const image_style ={
    paddingTop: 0.03 * HEIGHT
}

export default Header;