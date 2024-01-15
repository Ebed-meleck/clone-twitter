import TweetEditorInput from './tweetEditorInput'
import TweetEditorActions from './tweetEditorActions'
import TweetEditorButtons from './tweetEditorButtons'

export default function TweetEditorForm() {
    return (
        <>
            <div className="tweet-editor-form">
                <TweetEditorInput />
                <TweetEditorButtons />
            </div>
        </>
    )
}