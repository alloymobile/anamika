import { Injectable } from '@angular/core';
import { faApple, faAsymmetrik, faFacebook, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faCheckSquare, faClock, faEdit, faFile, faFileAlt, faSave, faSquare, faStar as starEmpty } from '@fortawesome/free-regular-svg-icons';
import {
	faDollarSign,
	faLock,
	faUser,
	faMapMarkerAlt,
	faEnvelope,
	faTh,
	faEye,
	faUserFriends,
	faHouseUser,
	faFileImport,
	faUniversity,
	faChartPie,
	faPhoneAlt,
	faPlus,
	faChevronDown,
	faInfoCircle,
	faExclamationTriangle,
	faSearch,
	faSpinner,
	faTools,
	faBuilding,
	faTimesCircle,
	faCheck,
	faTrashAlt,
	faCircle,
	faChevronUp,
	faStar,
	faPercentage,
	faPause,
	faUpload,
	faSort,
	IconDefinition,
	faExternalLinkAlt,
	faArrowLeft,
	faSync,
	faExchangeAlt,
	faCog,
	faTasks,
	faHome,
	faEquals,
	faNotEqual,
	faArrowRight,
	faCopy,
	faPaperPlane,
	faEllipsisV,
	faPrint,
	faDownload,
	faMapMarkedAlt,
  faUserPlus,
  faUserLock,
  faMinus,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export enum appIcon {
	HOME = 'home',
	DOLLAR = 'dollar',
	LOCATION = 'location',
	PERSON = 'person',
	LOCK = 'lock',
	EMAIL = 'email',
	PHONE = 'phone',
	DASHBOARD = 'dashboard',
	OVERVIEW = 'overview',
	PARTIES = 'parties',
	PROPERTY = 'property',
	MORTGAGE = 'mortgage',
	CREATE_DOCUMENTS = 'create_documents',
	REPORT = 'report',
	EDIT = 'edit',
	ADD = 'add',
	DOWN = 'down',
	UP = 'up',
	INFO = 'info',
	EXCLAMATION = 'exclamation',
	SEARCH = 'search',
	LOADING = 'loading',
	PAUSE = 'pause',
	BUILDER = 'builder',
	CORPORATION = 'corporation',
	SUCCESS = 'success',
	ERROR = 'error',
	WARNING = 'warning',
	DELETE = 'delete',
	DOT = 'dot',
	STAR = 'star',
	EMPTY_STAR = 'emptyStar',
	PERCENTAGE = 'percentage',
	CALENDAR = 'calendar',
	CHECK = 'check',
	CLOCK = 'clock',
	UPLOAD = 'upload',
	FILE_IMPORT = 'fileImport',
	SORT = 'sort',
	BACK = 'back',
	EXTERNAL = 'external',
	CLOSE = 'close',
	REFRESH = 'refresh',
	NOTE = 'note',
	CHANGE = 'change',
	TASKS = 'tasks',
	SETTINGS = 'settings',
	EQUAL = 'equal',
	NOT_EQUAL = 'notEqual',
	OVERRIDE = 'override',
	REMOVE = 'remove',
	COPY = 'copy',
	RESEND = 'resend',
	FILE = 'file',
	FILE_COMPLETE = 'fileComplete',
	KEBAB = 'kebab',
	SAVE = 'save',
	DOWNLOAD = 'download',
	PRINT = 'print',
	CHECKBOX_CHECKED = 'checkboxChecked',
	CHECKBOX_UNCHECKED = 'checkboxUnchecked',
	MAP = 'map',
  REGISTER = 'register',
  SELECT = 'select',
  LOGIN = 'login',
  APPLOGO = 'applogo',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  MICROSOFT = 'microsoft',
  APPLE = 'apple',
  CIRCLE = 'circle',
  MINUS = 'minus',
  CART = 'cart'
}

const icons: { [id in appIcon]: IconDefinition } = {
	home: faHome,
	dollar: faDollarSign,
	location: faMapMarkerAlt,
	lock: faLock,
	person: faUser,
	phone: faPhoneAlt,
	email: faEnvelope,
	dashboard: faTh,
	overview: faEye,
	parties: faUserFriends,
	property: faHouseUser,
	mortgage: faUniversity,
	create_documents: faFileImport,
	report: faChartPie,
	edit: faEdit,
	add: faPlus,
	down: faChevronDown,
	up: faChevronUp,
	info: faInfoCircle,
	exclamation: faExclamationTriangle,
	search: faSearch,
	loading: faSpinner,
	builder: faTools,
	corporation: faBuilding,
	success: faCheck,
	error: faTimesCircle,
	warning: faExclamationTriangle,
	delete: faTrashAlt,
	dot: faCircle,
	star: faStar,
	emptyStar: starEmpty,
	calendar: faCalendar,
	percentage: faPercentage,
	check: faCheck,
	clock: faClock,
	pause: faPause,
	upload: faUpload,
	fileImport: faFileImport,
	sort: faSort,
	back: faArrowLeft,
	external: faExternalLinkAlt,
	close: faTimesCircle,
	refresh: faSync,
	note: faFile,
	change: faExchangeAlt,
	tasks: faTasks,
	settings: faCog,
	equal: faEquals,
	notEqual: faNotEqual,
	override: faArrowRight,
	remove: faTimesCircle,
	copy: faCopy,
	resend: faPaperPlane,
	fileComplete: faFile,
	kebab: faEllipsisV,
	save: faSave,
	print: faPrint,
	download: faDownload,
	checkboxChecked: faCheckSquare,
	checkboxUnchecked: faSquare,
	file: faFileAlt,
	map: faMapMarkedAlt,
  register: faUserPlus,
  select: faCheck,
  login: faUserLock,
  applogo: faAsymmetrik,
  google: faGoogle,
  facebook: faFacebook,
  microsoft: faMicrosoft,
  apple: faApple,
  circle: faCircle,
  minus: faMinus,
  cart: faShoppingCart,
};

@Injectable({
	providedIn: 'root',
})
export class IconService {
	getIcon(icon: appIcon): IconDefinition {
		return icons[icon];
	}
}

export const getFontawasomeIcon = (icon?: string): appIcon => {
  if(icon){
    switch (icon) {
      case "faDownload":
        return appIcon.DOWNLOAD;
      case "faHome":
        return appIcon.HOME;
      case "faDollarSign":
        return appIcon.DOLLAR;
      case "faMapMarkerAlt":
        return appIcon.LOCATION;
      case "faLock":
        return appIcon.LOCK;
      case "faUser":
        return appIcon.PERSON;
      case "faPhoneAlt":
        return appIcon.PHONE;
      case "faEnvelope":
        return appIcon.EMAIL;
      case "faTh":
        return appIcon.DASHBOARD;
      case "faGoogle":
        return appIcon.GOOGLE;
      case "faFacebook":
        return appIcon.FACEBOOK;
      case "faMicrosoft":
        return appIcon.MICROSOFT;
      case "faApple":
        return appIcon.APPLE;
    }
  }
  return appIcon.APPLOGO;
};

