// import auth0 from 'auth0-js'

class AuthService {
//   auth0 = new auth0.WebAuth({
//     domain: process.env.AUTH0_DOMAIN,
//     clientID: process.env.AUTH0_CLIENT_ID,
//     redirectUri: process.env.AUTH0_REDIRECT_URI,
//     audience: 'https://' + process.env.AUTH0_DOMAIN + '/userinfo',
//     responseType: 'token id_token',
//     scope: process.env.AUTH0_SCOPE
//   });
//
//   login() {
//     this.auth0.authorize()
//   }
//
//   parseHash({ hash }) {
//     this.auth0.parseHash({ hash }, (err, authResult) => {
//       if (err) return err
//       this.auth0.client.userInfo(authResult.accessToken, function(err, user) {
//         // Now you have the user's information
//         if (err) return err
//         // console.log(user)
//         return user
//       })
//     })
//   }
}

export { AuthService }
