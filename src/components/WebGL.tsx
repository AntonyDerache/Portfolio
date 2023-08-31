import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export interface WebGLProps {
  path: string;
  filename: string;
}

function WebGL({ path, filename }: WebGLProps) {
  const { unityProvider } = useUnityContext({
    loaderUrl: `${path + filename}.loader.js`,
    dataUrl: `${path + filename}.data`,
    frameworkUrl: `${path + filename}.framework.js`,
    codeUrl: `${path + filename}.wasm`,
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}

export default WebGL;
