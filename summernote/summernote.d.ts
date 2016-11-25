// Type definitions for Summernote v0.8.2
// Project: http://summernote.org/deep-dive/#initialization-options
// Definitions by: Wouter Staelens https://github.com/wstaelens/
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface SummernoteOptions {
    height?: number;
    minHeight?: number;
    maxHeight?: number;
    focus?: boolean;
    //toolbar?: any;
    toolbar?: ToolbarOptions;
    popover?: any;
    callbacks?: any;
    dialogsInBody?: boolean;
    dialogsFade?: boolean;
    disableDragAndDrop?: boolean;
    shortcuts?: boolean;
    fontNames?: string[];
    fontNamesIgnoreCheck?: string[];
    placeholder?: string;
    modules?: ModuleOptions;
}

interface ToolbarOptions {
    options?: any; // todo
}



interface ModuleOptions {
    options?: any; // todo
}

interface CreateLinkOptions {
    text: string;
    url: string;
    /**
    * whether Link's target is new window or not
    */
    newWindow: boolean;
}

interface JQuery {
    summernote(): JQuery;
    summernote(command: string): JQuery;
    summernote(options?: SummernoteOptions): JQuery;
    summernote(command: string, markupString: string): JQuery
    summernote(command: string, value: number): JQuery;
    summernote(command: string, node: Node): JQuery;
    summernote(command: string, url: string, filename?: (string | Function)): JQuery;
    //summernote(method: "test"): JQuery;
    // Basic API
    summernote(command: 'createRange'): JQuery;
    summernote(command: 'saveRange'): JQuery;
    summernote(command: 'restoreRange'): JQuery;
    summernote(command: 'undo'): JQuery;
    summernote(command: 'redo'): JQuery;
    summernote(command: 'focus'): JQuery;
    summernote(command: 'isEmpty'): boolean;
    summernote(command: 'reset'): JQuery;
    summernote(command: 'disable'): JQuery;
    summernote(command: 'enable'): JQuery;
    // Font style API
    summernote(fontStyle: 'bold'): JQuery;
    summernote(fontStyle: 'italic'): JQuery;
    summernote(fontStyle: 'underline'): JQuery;
    summernote(fontStyle: 'strikethrough'): JQuery;
    summernote(command: 'superscript'): JQuery;
    summernote(command: 'subscript'): JQuery;
    summernote(command: 'removeFormat'): JQuery;
    summernote(command: 'backColor', color: string): JQuery;
    summernote(command: 'foreColor', color: string): JQuery;
    summernote(command: 'fontName', fontName: string): JQuery;
    summernote(command: 'fontSize', fontSize: number): JQuery;
    // Paragraph API
    summernote(command: 'justifyLeft'): JQuery;
    summernote(command: 'justifyRight'): JQuery;
    summernote(command: 'justifyCenter'): JQuery;
    summernote(command: 'justifyFull'): JQuery;
    summernote(command: 'insertParagraph'): JQuery;
    summernote(command: 'insertOrderedList'): JQuery;
    summernote(command: 'insertUnorderedList'): JQuery;
    summernote(command: 'indent'): JQuery;
    summernote(command: 'outdent'): JQuery;
    summernote(command: 'formatPara'): JQuery;
    summernote(command: 'formatH1'): JQuery;
    summernote(command: 'formatH2'): JQuery;
    summernote(command: 'formatH3'): JQuery;
    summernote(command: 'formatH4'): JQuery;
    summernote(command: 'formatH5'): JQuery;
    summernote(command: 'formatH6'): JQuery;
    // Insertion API
    summernote(command: 'insertImage', url: string, filename?: (string | Function)): JQuery;
    summernote(command: 'insertNode', node: Node): JQuery;
    summernote(command: 'insertText', text: string): JQuery;
    summernote(command: 'createLink', options: CreateLinkOptions): JQuery;
    summernote(command: 'unlink'): JQuery;
    // Callbacks
    // todo!
}

declare module "summernote" {
}