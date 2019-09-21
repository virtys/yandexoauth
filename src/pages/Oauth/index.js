import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../redux/auth/routines'

const Oauth = ({ history, authDispatch }) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(history.location.search)
    authDispatch(urlParams.get('code'))
  }, [])

  return <div>Authorizing</div>
}

const mapDispatchToProps = dispatch => ({
  authDispatch: code => dispatch(auth(code)),
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Oauth)
)
