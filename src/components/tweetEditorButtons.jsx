import TweetEditorActions from "./tweetEditorActions"
import TweetEditorFormButton from "./tweetEditorFormButton"

export default function TweetEditorButtons() {
    return (
        <>
            <div className="tweet-editor-buttons">
                <TweetEditorActions />
                <TweetEditorFormButton style={"tweet-editor-button"}/>
            </div>
        </>
    )
}