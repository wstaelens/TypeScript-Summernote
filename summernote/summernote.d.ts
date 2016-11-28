// Type definitions for Summernote v0.8.2
// Project: http://summernote.org/deep-dive/#initialization-options
// Definitions by: Wouter Staelens https://github.com/wstaelens/
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface SummernoteOptions {
    airMode?: boolean;
    callbacks?: any; // todo
    codemirror?: CodemirrorOptions;
    colors?: colorsDef;
    dialogsInBody?: boolean;
    dialogsFade?: boolean;
    direction?: string;
    disableDragAndDrop?: boolean;
    focus?: boolean;
    fontNames?: string[];
    fontNamesIgnoreCheck?: string[];
    height?: number;
    hint?: HintOptions;
    icons?: IconsOptions;
    insertTableMaxSize?: InsertTableMaxSizeOptions;
    keyMap?: KeyMapOptions;
    lang?: string;
    lineHeights?: string[];
    minHeight?: number;
    maxHeight?: number;
    maximumImageFileSize?: any;
    modules?: ModuleOptions;
    popover?: PopoverOptions;
    placeholder?: string;
    shortcuts?: boolean;
    styleTags?: styleTagsOptions[];
    styleWithSpan?: boolean;
    tabsize?: number;
    tableClassName?: string;
    textareaAutoSync?: boolean;
    toolbar?: toolbarDef;
    width?: number;
}

// callbacks ?
// https://www.typescriptlang.org/docs/handbook/functions.html#writing-the-function-type
//type OptionsDef = {
//    callbacks?: {
//        [event: string]: () => void
//    }
//};


type toolbarStyleGroupOptions = 'style' | 'bold' | 'italic' | 'underline' | 'clear';
type toolbarFontGroupOptions = 'strikethrough' | 'superscript' | 'subscript';
type toolbarFontsizeGroupOptions = 'fontsize';
type toolbarColorGroupOptions = 'color';
type toolbarParaGroupOptions = 'ul' | 'ol' | 'paragraph';
type toolbarHeightGroupOptions = 'height';
type toolbarTableGroupOptions = 'table';
type toolbarInsertGroupOptions = 'link' | 'picture' | 'hr';
type toolbarViewGroupOptions = 'fullscreen' | 'codeview';
type toolbarHelpGroupOptions = 'help';
//type toolbarDef = [string, string[]][];
type toolbarDef = [
    ['style', toolbarStyleGroupOptions[]]
    | ['font', toolbarFontGroupOptions[]]
    | ['fontsize', toolbarFontsizeGroupOptions[]]
    | ['color', toolbarColorGroupOptions[]]
    | ['para', toolbarParaGroupOptions[]]
    | ['height', toolbarHeightGroupOptions[]]
    | ['table', toolbarTableGroupOptions[]]
    | ['insert', toolbarInsertGroupOptions[]]
    | ['view', toolbarViewGroupOptions[]]
    | ['help', toolbarHelpGroupOptions[]]
];



type colorsDef = [string[]][];
type styleTagsOptions = 'p' | 'blockquote' | 'pre' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface InsertTableMaxSizeOptions {
    col: number;
    row: number;
}

interface IconsOptions {
    options?: any; // todo
}

interface KeyMapOptions {
    pc?: KeyMapPcOptions;
    mac?: KeyMapMacOptions;
}

interface KeyMapPcOptions {
    options?: any; // todo
}

interface KeyMapMacOptions {
    options?: any; // todo
}

interface HintOptions {
    words?: string[];
    mentions?: string[];
    match: RegExp;
    search: Function;
    template?: Function;
    content?: Function;
}

interface CodemirrorOptions {
    mode?: string;
    htmlNode?: boolean;
    lineNumbers?: boolean;
    theme?: string;
}

type popoverImageOptionsImagesize = 'imageSize100' | 'imageSize50' | 'imageSize25';
type popoverImageOptionsFloat = 'floatLeft' | 'floatRight' | 'floatNone';
type popoverImageOptionsRemove = 'removeMedia';
type popoverImageDef = [
    ['imagesize', popoverImageOptionsImagesize[]],
    ['float', popoverImageOptionsFloat[]],
    ['remove', popoverImageOptionsRemove[]]
];

type popoverLinkLinkOptions = 'linkDialogShow' | 'unlink';
type popoverLinkDef = [
    ['link', popoverLinkLinkOptions[]]
];

type popoverAirOptionsColor = 'color';
type popoverAirOptionsFont = 'bold' | 'underline' | 'clear';
type popoverAirOptionsPara = 'ul' | 'paragraph';
type popoverAirOptionsTable = 'table';
type popoverAirOptionsInsert = 'link' | 'picture';
type popoverAirDef = [
    ['color', popoverAirOptionsColor],
    ['font', popoverAirOptionsFont],
    ['para', popoverAirOptionsPara],
    ['table', popoverAirOptionsTable],
    ['insert', popoverAirOptionsInsert]
];

interface PopoverOptions {
    image?: popoverImageDef;
    link?: popoverLinkDef;
    air?: popoverAirDef;
}

interface ModuleOptions {
    options?: any; // todo
}

interface CreateLinkOptions {
    text: string;
    url: string;
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

    summernote(command: 'destroy'): JQuery;
    summernote(command: 'code', markupStr?: string): JQuery;
    summernote(command: 'editor.pasteHTML' | 'pasteHTML', markup : string): JQuery;

    // Basic API
    summernote(command: 'editor.createRange' | 'createRange'): JQuery;
    summernote(command: 'editor.saveRange' | 'saveRange'): JQuery;
    summernote(command: 'editor.restoreRange' | 'restoreRange'): JQuery;
    summernote(command: 'editor.undo' | 'undo'): JQuery;
    summernote(command: 'editor.redo' | 'redo'): JQuery;
    summernote(command: 'editor.focus' | 'focus'): JQuery;
    summernote(command: 'editor.isEmpty' | 'isEmpty'): boolean;
    summernote(command: 'reset'): JQuery;
    summernote(command: 'disable'): JQuery;
    summernote(command: 'enable'): JQuery;
    // Font style API
    summernote(fontStyle: 'editor.bold' | 'bold'): JQuery;
    summernote(fontStyle: 'editor.italic' | 'italic'): JQuery;
    summernote(fontStyle: 'editor.underline' | 'underline'): JQuery;
    summernote(fontStyle: 'editor.strikethrough' | 'strikethrough'): JQuery;
    summernote(command: 'editor.superscript' | 'superscript'): JQuery;
    summernote(command: 'editor.subscript' | 'subscript'): JQuery;
    summernote(command: 'editor.removeFormat' | 'removeFormat'): JQuery;
    summernote(command: 'backColor', color: string): JQuery;
    summernote(command: 'foreColor', color: string): JQuery;
    summernote(command: 'fontName', fontName: string): JQuery;
    summernote(command: 'editor.fontSize' | 'fontSize', fontSize: number): JQuery;
    // Paragraph API
    summernote(command: 'editor.justifyLeft' | 'justifyLeft'): JQuery;
    summernote(command: 'editor.justifyRight' | 'justifyRight'): JQuery;
    summernote(command: 'editor.justifyCenter' | 'justifyCenter'): JQuery;
    summernote(command: 'editor.justifyFull' | 'justifyFull'): JQuery;
    summernote(command: 'insertParagraph'): JQuery;
    summernote(command: 'editor.insertOrderedList' | 'insertOrderedList'): JQuery;
    summernote(command: 'editor.insertUnorderedList' | 'insertUnorderedList'): JQuery;
    summernote(command: 'editor.indent' | 'indent'): JQuery;
    summernote(command: 'editor.outdent' | 'outdent'): JQuery;
    summernote(command: 'formatPara'): JQuery;
    summernote(command: 'formatH1'): JQuery;
    summernote(command: 'formatH2'): JQuery;
    summernote(command: 'formatH3'): JQuery;
    summernote(command: 'formatH4'): JQuery;
    summernote(command: 'formatH5'): JQuery;
    summernote(command: 'formatH6'): JQuery;
    // Insertion API
    summernote(command: 'editor.insertImage' | 'insertImage', url: string, filename?: (string | Function)): JQuery;
    summernote(command: 'editor.insertNode' | 'insertNode', node: Node): JQuery;
    summernote(command: 'editor.insertText' | 'insertText', text: string): JQuery;
    summernote(command: 'createLink', options: CreateLinkOptions): JQuery;
    summernote(command: 'editor.unlink' | 'unlink'): JQuery;
    // Callbacks
    // todo!

    // what about these?
    // editor.insertImagesOrCallback ??
    // editor.afterCommand ??
    // editor.resizeTo ??
    // editor.resize ??
    // editor.saveTarget ??
    // editor.isActivated ??
    // editor.formatBlock ??
    // editor.color ??
    // editor.lineHeight ??
    // editor.insertTable ??
    // editor.insertHorizontalRule ??
    // editor.floatMe ??
    // editor.removeMedia ??
    // editor.currentStyle ??
    // editor.getLinkInfo ??
    // editor.getSelectedText ??

    // todo: implement keyof in future release of TypeScript: http://stackoverflow.com/a/40843364/187650
}

declare module "summernote" {
}