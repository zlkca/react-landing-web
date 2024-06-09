import Link from 'next/link';
import { useState } from 'react';

export default function CodeGenerator() {
    const [data, setData] = useState();
    const handleDataChange = (e) => {
        const schema = e.target.value;
        AppGenAPI.genApp({schema}).then(r => {
            console.log(r);
        });
    }
    return (
        <>
            <h1>Code Generator</h1>
            <textarea name="body"
                onChange={handleDataChange}
                value={data} />
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}