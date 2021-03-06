export class NotificationConfig {
    /**
     * @return {?}
     */
    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * @param {?} options
     * @param {?=} type
     */
    constructor(options, type) {
        this.index = this.guid();
        this.title = options.title || '';
        this.state = 'enter';
        this.duration = options.duration == 0 ? 0 : (options.duration || 4000);
        this.message = options.message || '';
        this.icon = options.icon || '';
        this.showClose = options.showClose || true;
        this.type = type || options.type || 'info';
    }
}
function NotificationConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    NotificationConfig.prototype.index;
    /** @type {?} */
    NotificationConfig.prototype.title;
    /** @type {?} */
    NotificationConfig.prototype.duration;
    /** @type {?} */
    NotificationConfig.prototype.icon;
    /** @type {?} */
    NotificationConfig.prototype.message;
    /** @type {?} */
    NotificationConfig.prototype.showClose;
    /** @type {?} */
    NotificationConfig.prototype.state;
    /** @type {?} */
    NotificationConfig.prototype.type;
}
