import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../redux/auth/routines'
import { AUTHORIZE_URL } from '../../constants/oauth.yandex'

const Login = () => {
  return (
    <div>
      <a href={AUTHORIZE_URL}>YA AUTHORIZATION</a>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  auth: credentials => {
    dispatch(auth(credentials))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Login)
