import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";


export const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState([
  ])

  const [newCommentText, setNewCommentText] = useState('');
  

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm:ss",)

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,   
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);

    setNewCommentText('');

  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('O comentário é obrigatório');
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === 'link') {
            return <p key={item.content}><a  href="">{item.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder="Deixe um comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>{
          return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
          )
        })}
      </div>
    </article>
  );
};