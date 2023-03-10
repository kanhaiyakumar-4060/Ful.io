import React, { useState } from 'react';

function TextEditor() {
    const [content, setContent] = useState('');

    function handleBoldClick() {
        document.execCommand('bold', false, null);
    }

    function handleItalicClick() {
        document.execCommand('italic', false, null);
    }



    return (
        <div>
            <div className='btns'><button onClick={
                handleBoldClick
            }

            >Bold</button><button onClick={
                handleItalicClick
            }

            >Italic</button></div><div contentEditable={
                true
            }

                onInput={
                    (e) => setContent(e.currentTarget.textContent)
                }

                style={
                    {
                        border: "5px black solid", height: "65vh", width: "100%", marginTop: "40px", padding: "20px"
                    }
                }

            />

        </div>
    );
}

export default TextEditor;
