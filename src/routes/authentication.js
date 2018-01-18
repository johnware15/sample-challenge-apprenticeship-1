import express from 'express'
import signIn from '../actions'


const router = express.Router()

const signInRoute = router.post('/sign-in', (req, res) => {
  const exUser = req.body
  signIn(req.body.email, req.body.password)
    .then(() => {
      if (exUser === true) {
        res.render('/')
      } else {
        // console.log('Try Again')
        res.render('/sign-in')
      }
    })
    .catch(error => error)
})

module.exports = signInRoute
