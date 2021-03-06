import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class HollowDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._el = this._elementRef.nativeElement;
        this.nativeElement = this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el, `at-btn--${this.atType}--hollow`);
    }
}
HollowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hollow]'
            },] },
];
/**
 * @nocollapse
 */
HollowDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
HollowDirective.propDecorators = {
    'atType': [{ type: Input, args: ['atType',] },],
};
function HollowDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    HollowDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HollowDirective.ctorParameters;
    /** @type {?} */
    HollowDirective.propDecorators;
    /** @type {?} */
    HollowDirective.prototype._el;
    /** @type {?} */
    HollowDirective.prototype.nativeElement;
    /** @type {?} */
    HollowDirective.prototype.atType;
    /** @type {?} */
    HollowDirective.prototype._elementRef;
    /** @type {?} */
    HollowDirective.prototype._renderer;
}
