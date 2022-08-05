import React from 'react'
import {connect} from 'react-redux'

const ChHeader = () => {
    const state = {
        value1:2
    }
  return (
    <div>{state.value1}</div>
  )
}

const mapStateToProps = (state) => {
    return {
        value1: state.value1
    }
}

export default connect(mapStateToProps)(ChHeader)