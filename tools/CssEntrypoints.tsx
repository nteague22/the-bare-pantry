import React, { Fragment, useMemo } from 'react';
import EntrypointProps from './EntrypointProps';

export default function CssEntrypoints(props: EntrypointProps) {
    const entries = useMemo(()=> props.stats.toJson({ all: false, entrypoints: true }).entrypoints, [props.stats]);
    return (
        <Fragment>
            {Object.keys(entries).map(item =>
                <Fragment key={item}>
                    <Fragment>
                        {`case "${item}":`}
                    </Fragment>
                    {entries[item].assets.filter(e => /\.css$/.test(e)).map(scr =>
                        <link key={scr} href={scr} rel="stylesheet" />
                    )}
                    <Fragment>
                        {`break;`}
                    </Fragment>
                </Fragment>
            )}
        </Fragment>
    );
}