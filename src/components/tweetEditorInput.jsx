export default function TweetEditorInput() {
    const valueText = "What’s happening?"
    return(
        <>
            <input type="text" className="tweet-editor-input" placeholder={valueText}/>
        </>
    )
}