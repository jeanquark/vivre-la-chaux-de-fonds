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
        ]
    },

    { path: '/admin', name: 'admin', component: page('admin/index.vue') },
    { path: '/accueil', name: 'accueil', component: page('accueil') },
    { path: '/qui-sommes-nous', name: 'qui_sommes_nous', component: page('qui-sommes-nous.vue') },
    { path: '/spectacles', name: 'spectacles', component: page('spectacles.vue') },
    { path: '/reservation', name: 'reservation', component: page('reservation.vue') },
    { path: '/contact', name: 'contact', component: page('contact.vue') },
    { path: '/mes-reservations', name: 'mes_reservations', component: page('mes-reservations.vue') },

    { path: '/admin/users', name: '', component: page('admin/users/index.vue') },
    { path: '/admin/users/:id', name: '', component: page('admin/users/show.vue') },
    { path: '/admin/users/:id/edit', name: '', component: page('admin/users/edit.vue') },

    { path: '/admin/activities', name: '', component: page('admin/activities/index.vue') },
    { path: '/admin/activities/create', name: '', component: page('admin/activities/create.vue') },
    { path: '/admin/activities/:id', name: '', component: page('admin/activities/show.vue') },
    { path: '/admin/activities/:id/edit', name: '', component: page('admin/activities/edit.vue') },

    // {
    //     path: '/admin',
    //     // name: '',
    //     component: page('admin/index.vue'),
    //     children: [
    //         // {
    //         //     path: '',
    //         //     name: '',
    //         //     component: page('admin/index.vue')
    //         // },
    //         // { path: '', redirect: { name: 'admin.index' } },
    //         {
    //             path: 'users',
    //             name: 'admin.users.index',
    //             component: page('admin/users/index.vue')
    //         },
    //         {
    //             path: 'users/:id',
    //             name: '',
    //             component: page('admin/users/show.vue')
    //         },
    //     ]
    // },
    // {
    //     path: '/admin/users',
    //     component: page('admin/users/index.vue'),
    //     children: [
    //         { path: ':id', name: 'admin.users.show', component: page('admin/users/show.vue') },
    //         { path: ':id/edit', name: 'admin.users.edit', component: page('admin/users/edit.vue') }
    //     ]
    // },

    // {
    //     path: '/admin/activities',
    //     component: page('admin/activities/index.vue'),
    //     children: [
    //         { path: '/admin/activities/:id', name: 'admin.activities.show', component: page('admin/activities/show.vue') },
    //         { path: '/admin/activities/:id/edit', name: 'admin.activities.edit', component: page('admin/activities/edit.vue') }
    //     ]
    // },
    // {
    //     path: '/admin/sponsors',
    //     component: page('admin/sponsors/index.vue'),
    //     children: [
    //         { path: '/:id', name: 'admin.sponsors.show', component: page('admin/sponsors/show.vue') },
    //         { path: '/:id/edit', name: 'admin.sponsors.edit', component: page('admin/sponsors/edit.vue') }
    //     ]
    // },

    { path: '*', component: page('errors/404.vue') }
]
