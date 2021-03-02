import React, { Component } from 'react';

const LoaderHoc = (WrappedComponent) => {
return class LoaderHoc extends Component {
  render() {
    return this.props.users.length === 0 ? <div>Yükleniyor ...</div>
      : <WrappedComponent {...this.props}/>
   
  }
}}

export default LoaderHoc;
