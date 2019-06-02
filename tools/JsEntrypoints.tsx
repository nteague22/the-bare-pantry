import EntrypointProps from './EntrypointProps';
import React, { useMemo, Fragment } from 'react';

export default function JsEntrypoints(props: EntrypointProps) {
    const entries = useMemo(() => props.stats.toJson({ all: false, entrypoints: true }).entrypoints, [props.stats]);
    return (
        <Fragment>
            {Object.keys(entries).map(item =>
                <Fragment key={item}>
                    <Fragment>
                        {`case "${item}":`}
                    </Fragment>
                    {entries[item].assets.filter(e => /\.js$/.test(e)).map(scr =>
                        <script key={scr} src={scr} defer={true}></script>
                    )}
                    <Fragment>
                        {`break;`}
                    </Fragment>
                </Fragment>
            )}
        </Fragment>
    );
}