function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/welcome', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/enregistrement', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ] },

  // { path: '/admin', name: 'admin', component: page('admin.vue') },
  { path: '/admin', name: 'admin', component: page('admin/index.vue') },
  { path: '/accueil', name: 'accueil', component: page('accueil') },
  { path: '/qui-sommes-nous', name: 'qui_sommes_nous', component: page('qui-sommes-nous.vue') },
  { path: '/spectacles', name: 'spectacles', component: page('spectacles.vue') },
  { path: '/reservation', name: 'reservation', component: page('reservation.vue') },
  { path: '/contact', name: 'contact', component: page('contact.vue') },
  { path: '/mes-reservations', name: 'mes_reservations', component: page('mes-reservations.vue') },
  { path: '*', component: page('errors/404.vue') }
]
