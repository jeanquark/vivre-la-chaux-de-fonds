import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser, faLock, faSignOutAlt, faCog, faUsers, faCalendarDay, faBriefcase, faUserSecret, faArrowsAltH, faEye, faEdit, faTrash, faHome, faTachometerAlt, faChevronDown, faDollarSign, faFileAlt, faFilePdf, faImage, faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faCode, faFolder, faListUl, faListOl, faLink, faCut, faCopy, faLockOpen, faAngleDown, faColumns, faFile, faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub, faChrome
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser, faLock, faSignOutAlt, faCog, faGithub, faChrome, faUsers, faCalendarDay, faBriefcase, faUserSecret, faArrowsAltH, faEye, faEdit, faTrash, faHome, faTachometerAlt, faChevronDown, faDollarSign, faFileAlt, faFilePdf, faImage, faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faCode, faFolder, faListUl, faListOl, faLink, faCut, faCopy, faLockOpen, faAngleDown, faColumns, faFile, faEnvelope
)

// Vue.component('fa', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
