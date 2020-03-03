function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

// import auth from '../middleware/auth'


export default [
    { path: '/', name: 'index', component: page('index.vue') },
    { path: '/welcome', name: 'welcome', component: page('welcome.vue') },

    { path: '/login', name: 'login', component: page('auth/login.vue') },
    { path: '/logout', name: 'logout', component: page('auth/logout.vue') },
    { path: '/enregistrement', name: 'register', component: page('auth/register.vue') },
    { path: '/mot-de-passe/reinitialiser', name: 'password.request', component: page('auth/password/email.vue') },
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

    { path: '/accueil', name: 'accueil', component: page('accueil') },
    { path: '/association', name: 'association', component: page('association') },
    { path: '/actualites', name: 'actualites', component: page('actualites') },

    { path: '/activites', name: 'activities', component: page('activities') },
    { path: '/activites/:slug', name: 'activity', component: page('activities/_slug/index') },

    { path: '/on-parle-de-nous', name: 'on-parle-de-nous', component: page('on-parle-de-nous') },
    { path: '/participez', name: 'participez', component: page('participez') },
    { path: '/contact', name: 'contact', component: page('contact.vue') },
    { path: '/devenir-benevole', name: 'devenir-benevole', component: page('devenir-benevole.vue') },
    { path: '/devenir-membre', name: 'devenir-membre', component: page('devenir-membre.vue') },
    { path: '/partenariat', name: 'partenariat', component: page('partenariat.vue') },
    
    // { path: '/admin', name: 'admin', component: page('admin/index.vue') },

    // { path: '/admin/users', name: '', component: page('admin/users/index.vue') },
    // { path: '/admin/users/create', name: '', component: page('admin/users/create.vue') },
    // { path: '/admin/users/:id', name: '', component: page('admin/users/show.vue') },
    // { path: '/admin/users/:id/edit', name: '', component: page('admin/users/edit.vue') },

    // { path: '/admin/activities', name: '', component: page('admin/activities/index.vue') },
    // { path: '/admin/activities/create', name: '', component: page('admin/activities/create.vue') },
    // { path: '/admin/activities/:id', name: '', component: page('admin/activities/show.vue') },
    // { path: '/admin/activities/:id/edit', name: '', component: page('admin/activities/edit.vue') },

    // { path: '/admin/sponsors', name: '', component: page('admin/sponsors/index.vue') },
    // { path: '/admin/sponsors/create', name: '', component: page('admin/sponsors/create.vue') },
    // { path: '/admin/sponsors/:id', name: '', component: page('admin/sponsors/show.vue') },
    // { path: '/admin/sponsors/:id/edit', name: '', component: page('admin/sponsors/edit.vue') },




    { path: '/admin', component: page('admin/index.vue'), children: [

        { path: 'dashboard', name: '', component: page('admin/dashboard.vue') },

        { path: 'users', name: '', component: page('admin/users/index.vue') },
        { path: 'users/create', name: '', component: page('admin/users/create.vue') },
        { path: 'users/:id', name: '', component: page('admin/users/show.vue') },
        { path: 'users/:id/edit', name: '', component: page('admin/users/edit.vue') },

        { path: 'activities', name: '', component: page('admin/activities/index.vue') },
        { path: 'activities/create', name: '', component: page('admin/activities/create.vue') },
        { path: 'activities/:id', name: '', component: page('admin/activities/show.vue') },
        { path: 'activities/:id/edit', name: '', component: page('admin/activities/edit.vue') },

        { path: 'sponsors', name: '', component: page('admin/sponsors/index.vue') },
        { path: 'sponsors/create', name: '', component: page('admin/sponsors/create.vue') },
        { path: 'sponsors/:id', name: '', component: page('admin/sponsors/show.vue') },
        { path: 'sponsors/:id/edit', name: '', component: page('admin/sponsors/edit.vue') },

        { path: '', redirect: '/admin/dashboard' },

    ]},



    // { path: '/admin/activities/create', name: '', component: page('admin/activities/create.vue'), meta: {
    //             middleware: [
    //                 auth
    //             ]
    //         } },


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
