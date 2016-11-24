// Type definitions for Summernote v0.8.2
// Project: https://github.com/summernote/summernote/ http://summernote.org/
// Definitions by: Wouter Staelens (Winking - http://www.winking.be)
// Definitions: https://github.com/wstaelens/TypeScript-Summernote


/// <reference path="../jquery/jquery.d.ts"/>

interface SummernoteOptions {
    height?: number;
    minHeight?: number;
    maxHeight?: number;
    focus?: boolean;
    toolbar?: any;
    popover?: any;
    callbacks?: any
}

interface JQuery {
    summernote(): JQuery;
    summernote(command: string): JQuery;
    summernote(options?: SummernoteOptions): JQuery;
    summernote(command: string, markupString: string): JQuery
}

declare module "summernote" {
}

// http://summernote.org/deep-dive/#api