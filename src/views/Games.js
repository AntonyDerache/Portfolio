import React from 'react'
import WebGL from  '../components/WebGL';
import { useParams } from 'react-router-dom';

const Games = ({data}) => {
    let { name } = useParams();

    return (
        <WebGL path={data[name].WebGLPath} filename={data[name].Filename} />
    )
}

export default Games