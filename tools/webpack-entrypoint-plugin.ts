import webpack, { Plugin, Compiler } from 'webpack';
import ReactDOMServer from 'react-dom/server';
import CssEntrypoints from './CssEntrypoints';
import React from 'react';
import { writeFile, createWriteStream } from 'fs';
import { resolve } from 'path';
import JsEntrypoints from './JsEntrypoints';

export class WebpackEntrypointPlugin {
    constructor(public css: string, public js: string) {
    }

    apply(compiler: Compiler) {
        compiler.hooks.done.tapAsync('BuildEntrypoints', stats => {
            if (stats.hasErrors()) {
                throw new Error(stats.toString({ all: false, errors: true, errorDetails: true, warnings: true }));
            }
            
            let cssStream = createWriteStream(this.css, {
                autoClose: true,
                encoding: 'utf8'
            });


            let jsStream = createWriteStream(this.js,
                {
                    autoClose: true,
                    encoding: 'utf8'
            });

            ReactDOMServer.renderToStaticNodeStream(React.createElement(CssEntrypoints, { stats })).pipe(cssStream);

            ReactDOMServer.renderToStaticNodeStream(React.createElement(JsEntrypoints, { stats })).pipe(jsStream);

        });
    }
}